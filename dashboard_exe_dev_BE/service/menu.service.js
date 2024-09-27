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
exports.importExcel = exports.exportExcel = exports.List = exports.Delete = exports.Update = exports.Insert = exports.Find = exports.All = void 0;
const repository = __importStar(require("../repository/menu.repository"));
const build = __importStar(require("../helper/response.helper"));
const moment_1 = __importDefault(require("moment"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const exceljs_1 = require("exceljs");
const List = async (req) => {
    let response;
    try {
        let { role_id } = req.body;
        let get;
        let menuList = [];
        let menuObj = {};
        if (role_id != "{role_id}" && role_id) {
            // console.log(role_id);
            get = await repository.listWithRoleId(role_id);
            for (let data of get) {
                if (data.path != "#" && data.menu_parent_id == null) {
                    let action = await repository.getAction(data.action);
                    let actionList = [];
                    for (let nameAction of action) {
                        actionList.push(nameAction.name);
                    }
                    menuObj = {
                        title: data.name,
                        Icon: data.icon,
                        path: data.path,
                        permission: actionList,
                    };
                    menuList.push(menuObj);
                }
                else {
                    if (data.path == "#") {
                        let menuChild = await repository.getChildWithRoleId(data.id, role_id);
                        for (let getAction of menuChild) {
                            if (getAction.path == "$") {
                                getAction.path = undefined;
                                let child = await repository.getChildWithRoleId(getAction.id, data.id);
                                for (let actionChild of child) {
                                    if (actionChild.path == "%") {
                                        let child2child = await repository.getChildWithRoleId(actionChild.id, data.id);
                                        for (const child3 of child2child) {
                                            if (child3.path == "&") {
                                                let child3child = await repository.getChildWithRoleId(child3.id, data.id);
                                                for (const child4 of child3child) {
                                                    if (child4.path == "*") {
                                                        let child4child = await repository.getChildWithRoleId(child4.id, data.id);
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
                                            }
                                        }
                                        for (let actionChild2 of child2child) {
                                            let action = await repository.getAction(actionChild2.permission);
                                            actionChild2.permission = action;
                                        }
                                        actionChild.submenuId = child2child.length;
                                        actionChild.submenuItems = child2child;
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
                            }
                            let action = await repository.getAction(getAction.permission);
                            let actionList = [];
                            for (let nameAction of action) {
                                actionList.push(nameAction.name);
                            }
                            getAction.permission = actionList;
                        }
                        menuObj = {
                            title: data.name,
                            Icon: data.icon,
                            submenuId: menuChild.length,
                            submenuItems: menuChild,
                        };
                        menuList.push(menuObj);
                    }
                }
            }
        }
        else {
            get = await repository.List();
            for (let data of get) {
                if (data.path != "#" && data.menu_parent_id == null) {
                    let action = await repository.getAction(data.action);
                    let actionList = [];
                    for (let nameAction of action) {
                        actionList.push(nameAction.name);
                    }
                    menuObj = {
                        title: data.name,
                        Icon: data.icon,
                        path: data.path,
                        permission: actionList,
                    };
                    menuList.push(menuObj);
                }
                else {
                    if (data.path == "#") {
                        let menuChild = await repository.getChild(data.id);
                        for (let getAction of menuChild) {
                            let action = await repository.getAction(getAction.permission);
                            let actionList = [];
                            for (let nameAction of action) {
                                actionList.push(nameAction.name);
                            }
                            getAction.permission = actionList;
                        }
                        menuObj = {
                            title: data.name,
                            Icon: data.icon,
                            submenuId: menuChild.length,
                            submenuItems: menuChild,
                        };
                        menuList.push(menuObj);
                    }
                }
            }
        }
        response = build.response("00", "success", menuList);
    }
    catch (error) {
        response = build.response("500", `${error.message}`, []);
    }
    return response;
};
exports.List = List;
const All = async () => {
    let result = await repository.All();
    let get = await repository.listMenuAll();
    for (let act1 of get) {
        if (act1.action && Array.isArray(act1.action)) {
            let actions = await repository.getActionAll(act1.action);
            act1.action = actions.map((item) => ({
                id: item.id,
                name: item.name,
            }));
        }
    }
    let menuList = [];
    let menuObj = {};
    for (let data of get) {
        if (data.path != "#" && data.menu_parent_id == null) {
            if (data.action && Array.isArray(data.action) && data.action[0].id) {
                let action = await repository.getActionAll(data.action.map((a) => a.id));
                data.action = action;
            }
            // let action = await repository.getActionAll(data.action.id);
            // data.action = action;
            menuList.push(data);
        }
        else {
            if (data.path == "#") {
                let menuChild = await repository.getChildAll(data.id);
                // console.log(menuChild);
                for (let dataChild of menuChild) {
                    if (dataChild.path == "$") {
                        let child = await repository.getChildAll(dataChild.id);
                        for (const child2 of child) {
                            if (child2.path == "%") {
                                let child2child = await repository.getChildAll(child2.id);
                                for (const child3 of child2child) {
                                    if (child3.path == "&") {
                                        let child3child = await repository.getChildAll(child3.id);
                                        for (const child4 of child3child) {
                                            if (child4.path == "*") {
                                                let child4child = await repository.getChildAll(child3.id);
                                                for (let actionChild4 of child4child) {
                                                    let action = await repository.getActionAll(actionChild4.action);
                                                    actionChild4.action = action;
                                                }
                                                child4.sub_menu_length = child4child.length;
                                                child4.sub_menu = child4child;
                                                child4.level = 5;
                                            }
                                        }
                                        for (let actionChild3 of child3child) {
                                            let action = await repository.getActionAll(actionChild3.action);
                                            actionChild3.action = action;
                                        }
                                        child3.sub_menu_length = child3child.length;
                                        child3.sub_menu = child3child;
                                        child3.level = 4;
                                    }
                                }
                                for (let actionChild2 of child2child) {
                                    let action = await repository.getActionAll(actionChild2.action);
                                    actionChild2.action = action;
                                }
                                child2.sub_menu_length = child2child.length;
                                child2.sub_menu = child2child;
                                child2.level = 3;
                            }
                        }
                        for (let actionChild of child) {
                            let action = await repository.getActionAll(actionChild.action);
                            actionChild.action = action;
                        }
                        dataChild.sub_menu_length = child.length;
                        dataChild.sub_menu = child;
                        dataChild.level = 2;
                    }
                    let action = await repository.getActionAll(dataChild.action);
                    dataChild.action = action;
                }
                data.sub_menu_length = menuChild.length;
                data.sub_menu = menuChild;
                data.level = 1;
                menuList.push(data);
            }
        }
    }
    return build.response("00", "success", menuList);
};
exports.All = All;
const Find = async (req) => {
    let response;
    try {
        let { id } = req.params;
        let data = await repository.Find(id);
        response = build.response("00", "success", data);
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
        let { name, icon, path, menu_parent_id, sort, action } = req.body;
        let cekPath = await repository.cekPath(path);
        if (cekPath.length >= 1) {
            return (response = build.response("400", "Path tidak boleh sama", cekPath));
        }
        let data = {
            name: name,
            icon: icon,
            path: path,
            menu_parent_id: menu_parent_id,
            sort: sort,
            action: action,
            status_id: "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d",
        };
        await repository.Insert(data);
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
        let { id } = req.params;
        let { name, icon, path, menu_parent_id, sort, action } = req.body;
        let cekPath = await repository.cekPathUpdate(path, id);
        if (cekPath.length >= 1) {
            return (response = build.response("400", "Path tidak boleh sama", cekPath));
        }
        let data = {
            name: name,
            icon: icon,
            path: path,
            sort: sort,
            menu_parent_id: menu_parent_id,
            action: action,
            updated_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            updated_by: req.userId,
        };
        await repository.Update(id, data);
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
        let { id } = req.body;
        let data = {
            status_id: "d2756750-7ceb-44db-aab8-aa72ab9aa491",
            deleted_at: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
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
const exportExcel = async () => {
    return await repository.All();
};
exports.exportExcel = exportExcel;
const importExcel = async (req) => {
    let response;
    try {
        let file = JSON.parse(JSON.stringify(req.files));
        if (!fs_1.default.existsSync("tmp")) {
            fs_1.default.mkdirSync("tmp");
        }
        let newpath = path_1.default.resolve(`./tmp/${file.file.name}`);
        fs_1.default.rename(file.file.tempFilePath, newpath, (err) => {
            if (err)
                throw err;
        });
        const workBook = new exceljs_1.Workbook();
        await workBook.xlsx.readFile("tmp/" + file.file.name);
        let sheet = workBook.getWorksheet("Sheet1");
        let dataFromExcel = [];
        sheet?.eachRow((row, rowNumber) => {
            let parsedData = JSON.parse(JSON.stringify(row.values));
            if (rowNumber > 1) {
                let data = {
                    name: parsedData[1],
                    icon: parsedData[2],
                    path: parsedData[3],
                    menu_parent_id: parsedData[4],
                    sort: parsedData[5],
                    status_id: "d82f06e1-bb0f-416c-9e8c-8a0cabf7da7d",
                };
                dataFromExcel.push(data);
            }
        });
        await repository.Insert(dataFromExcel);
        fs_1.default.unlink("./tmp/" + file.file.name, (err) => {
            if (err) {
                console.log(err);
            }
        });
        response = build.response("00", "success", {});
    }
    catch (error) {
        response = build.response("500", `${error.message}`, {});
    }
    return response;
};
exports.importExcel = importExcel;
