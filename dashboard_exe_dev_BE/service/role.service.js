"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const repository = __importStar(require("../repository/role.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const All = async () => {
    let response;
    try {
        let dataRole = await repository.All();
        let menuObj = {};
        for (let data of dataRole) {
            let dataMenu = await repository.getMenu(data.id);
            let list = [];
            for (let menuData of dataMenu) {
                if (menuData.path != "#" && menuData.menu_parent_id == null) {
                    let action = await repository.getAction(menuData.action);
                    let actionList = [];
                    for (let nameAction of action) {
                        actionList.push(nameAction.name);
                    }
                    menuObj = {
                        title: menuData.name,
                        Icon: menuData.icon,
                        path: menuData.path,
                        permission: actionList,
                    };
                    list.push(menuObj);
                }
                else {
                    if (menuData.path == "#") {
                        let menuChild = await repository.getMenuChild(menuData.id, data.id);
                        for (let getAction of menuChild) {
                            if (getAction.path == "$") {
                                getAction.path = undefined;
                                let child = await repository.getMenuChild(getAction.id, data.id);
                                for (let actionChild of child) {
                                    if (actionChild.path == "%") {
                                        let child2child = await repository.getMenuChild(actionChild.id, data.id);
                                        for (const child3 of child2child) {
                                            if (child3.path == "&") {
                                                let child3child = await repository.getMenuChild(child3.id, data.id);
                                                for (const child4 of child3child) {
                                                    if (child4.path == "*") {
                                                        let child4child = await repository.getMenuChild(child4.id, data.id);
                                                        for (let actionChild4 of child4child) {
                                                            let action = await repository.getAction(actionChild4.permission);
                                                            let actionList = [];
                                                            for (let childAction of action) {
                                                                // console.log(childAction);
                                                                actionList.push(childAction.name);
                                                            }
                                                            actionChild4.permission = actionList;
                                                        }
                                                        child4.submenuId = child3child.length;
                                                        child4.submenuItems = child3child;
                                                        child4.level = 5;
                                                    }
                                                }
                                                for (let actionChild3 of child3child) {
                                                    let action = await repository.getAction(actionChild3.permission);
                                                    let actionList = [];
                                                    for (let nameAction of action) {
                                                        actionList.push(nameAction.name);
                                                    }
                                                    actionChild3.permission = actionList;
                                                }
                                                child3.submenuId = child3child.length;
                                                child3.submenuItems = child3child;
                                                child3.level = 4;
                                            }
                                        }
                                        for (let actionChild2 of child2child) {
                                            let action = await repository.getAction(actionChild2.permission);
                                            let actionList = [];
                                            for (let nameAction of action) {
                                                actionList.push(nameAction.name);
                                            }
                                            actionChild2.permission = actionList;
                                        }
                                        actionChild.submenuId = child2child.length;
                                        actionChild.submenuItems = child2child;
                                        actionChild.level = 3;
                                    }
                                    let action = await repository.getAction(actionChild.permission);
                                    let actionList = [];
                                    for (let childAction of action) {
                                        // console.log(childAction);
                                        actionList.push(childAction.name);
                                    }
                                    actionChild.permission = actionList;
                                }
                                getAction.submenuId = child.length;
                                getAction.submenuItems = child;
                                getAction.level = 2;
                            }
                            let action = await repository.getAction(getAction.permission);
                            let actionList = [];
                            for (let nameAction of action) {
                                actionList.push(nameAction.name);
                            }
                            getAction.permission = actionList;
                        }
                        menuObj = {
                            title: menuData.name,
                            Icon: menuData.icon,
                            submenuId: menuChild.length,
                            submenuItems: menuChild,
                            level: 1,
                        };
                        list.push(menuObj);
                    }
                }
            }
            data.menu_list = list;
        }
        response = build.response("00", "success", dataRole);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.All = All;
const Find = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let data = await repository.Find(id);
        response = build.response("00", "success", data ? data : {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Find = Find;
const Insert = async (req) => {
    let response;
    try {
        let { name, description, menu_list } = req.body;
        let dataMenu = [];
        let dataRole = {
            name: name,
            description: description,
            status_id: "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d",
            created_by: req.userId,
        };
        for (let menu of menu_list) {
            let menuObj = {};
            let data = await repository.findMenu(menu.menu_id);
            if (!data) {
            }
            else {
                if (data.path != "#" && data.menu_parent_id != null) {
                    let menuParent = await repository.findMenu(data.menu_parent_id);
                    let checkDataMenu = 0;
                    if (dataMenu.length != 0) {
                        for (let check of dataMenu) {
                            if (check.menu_id == menuParent.id) {
                                checkDataMenu = checkDataMenu + 1;
                            }
                        }
                    }
                    if (checkDataMenu == 0) {
                        menuObj = { menu_id: menuParent.id, action: [] };
                        dataMenu.push(menuObj);
                    }
                    dataMenu.push(menu);
                }
                else {
                    dataMenu.push(menu);
                }
            }
        }
        // console.log(dataMenu);
        let insert = await repository.Insert(dataRole, dataMenu);
        if (insert != 1) {
            throw insert;
        }
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Insert = Insert;
const Update = async (req) => {
    let response;
    try {
        let { name, description, menu_list } = req.body;
        let { id } = req.params;
        let dataMenu = [];
        let data = {
            name: name,
            description: description,
            updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            updated_by: req.userId,
        };
        for (let menu of menu_list) {
            let menuObj = {};
            let data = await repository.findMenu(menu.menu_id);
            if (!data) {
            }
            else {
                if (data.path != "#" && data.menu_parent_id != null) {
                    let menuParent = await repository.findMenu(data.menu_parent_id);
                    let checkDataMenu = 0;
                    if (dataMenu.length != 0) {
                        for (let check of dataMenu) {
                            if (check.menu_id == menuParent.id) {
                                checkDataMenu = checkDataMenu + 1;
                            }
                        }
                    }
                    if (checkDataMenu == 0) {
                        menuObj = { menu_id: menuParent.id, action: [] };
                        dataMenu.push(menuObj);
                    }
                    dataMenu.push(menu);
                }
                else {
                    dataMenu.push(menu);
                }
            }
        }
        let update = await repository.Update(id, data, dataMenu);
        if (update != 1) {
            throw update;
        }
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Update = Update;
const Delete = async (req) => {
    let response;
    try {
        // let { id } = req.params;
        let { id } = req.body;
        let data = {
            status_id: "d2756750-7ceb-44db-aab8-aa72ab9aa491",
            deleted_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            deleted_by: req.userId,
        };
        await repository.Delete(id, data);
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.Delete = Delete;
