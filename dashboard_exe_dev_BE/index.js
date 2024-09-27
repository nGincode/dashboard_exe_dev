"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const env_config_1 = __importDefault(require("./config/env.config"));
const global_parameter_route_1 = __importDefault(require("./route/global-parameter.route"));
const log_middleware_1 = require("./middleware/log.middleware");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const auth_route_1 = __importDefault(require("./route/auth.route"));
const menu_route_1 = __importDefault(require("./route/menu.route"));
const role_route_1 = __importDefault(require("./route/role.route"));
const users_route_1 = __importDefault(require("./route/users.route"));
const action_route_1 = __importDefault(require("./route/action.route"));
const report_income_cost_route_1 = __importDefault(require("./route/report-income-cost.route"));
const report_type_route_1 = __importDefault(require("./route/report-type.route"));
const report_average_delay_route_1 = __importDefault(require("./route/report-average-delay.route"));
const report_sf_trainset_route_1 = __importDefault(require("./route/report-sf-trainset.route"));
const report_polsuska_route_1 = __importDefault(require("./route/report-polsuska.route"));
const report_fumigasi_route_1 = __importDefault(require("./route/report-fumigasi.route"));
const report_pest_route_1 = __importDefault(require("./route/report-pest.route"));
const report_facility_maintenance_route_1 = __importDefault(require("./route/report-facility_maintenance.route"));
const report_washing_facilities_route_1 = __importDefault(require("./route/report-washing-facilities.route"));
const report_otc_route_1 = __importDefault(require("./route/report-otc.route"));
const report_check_route_1 = __importDefault(require("./route/report-check.route"));
const report_capacity_1 = __importDefault(require("./route/report-capacity"));
const report_performance_by_train_number_route_1 = __importDefault(require("./route/report-performance-by-train-number.route"));
const report_vol_fare_route_1 = __importDefault(require("./route/report-vol-fare.route"));
const node_cluster_1 = __importDefault(require("node:cluster"));
const node_os_1 = __importDefault(require("node:os"));
const node_process_1 = __importDefault(require("node:process"));
const report_passenger_income_route_1 = __importDefault(require("./route/report-passenger-income.route"));
const report_station_performance_route_1 = __importDefault(require("./route/report-station-performance.route"));
const station_route_1 = __importDefault(require("./route/station.route"));
const distance_route_1 = __importDefault(require("./route/distance.route"));
const report_sp_get_afc_route_1 = __importDefault(require("./route/report-sp-get-afc.route"));
const report_od_peak_sml_route_1 = __importDefault(require("./route/report-od-peak-sml.route"));
const master_station_route_1 = __importDefault(require("./route/master-station.route"));
const report_delete_route_1 = __importDefault(require("./route//report-delete.route"));
const report_approval_route_1 = __importDefault(require("./route/report-approval.route"));
const dashboard_route_1 = __importDefault(require("./route/dashboard.route"));
const subsidi_route_1 = __importDefault(require("./route/subsidi.route"));
const prasarana_income_cost_route_1 = __importDefault(require("./route/prasarana-income-cost.route"));
const prasarana_struktur_organisasi_report_route_1 = __importDefault(require("./route/prasarana-struktur-organisasi-report.route"));
const prasarana_struktur_organisasi_sertifikasi_route_1 = __importDefault(require("./route/prasarana-struktur-organisasi-sertifikasi.route"));
const prasarana_struktur_organisasi_route_1 = __importDefault(require("./route/prasarana-struktur-organisasi.route"));
const prasarana_daftar_hadir_dinasan_route_1 = __importDefault(require("./route/prasarana-daftar-hadir-dinasan.route"));
const prasarana_struktur_organisasi_mcu_route_1 = __importDefault(require("./route/prasarana-struktur-organisasi-mcu.route"));
const konfigurasi_tanda_tangan_route_1 = __importDefault(require("./route/konfigurasi-tanda-tangan.route"));
const prasarana_dashboard_maintenance_route_1 = __importDefault(require("./route/prasarana-dashboard-maintenance.route"));
const prasarana_dashboard_operation_route_1 = __importDefault(require("./route/prasarana-dashboard-operation.route"));
const prasarana_maintenance_route_1 = __importDefault(require("./route/prasarana-maintenance.route"));
const prasarana_operation_route_1 = __importDefault(require("./route/prasarana-operation.route"));
const prasarana_serah_terima_dinasan_route_1 = __importDefault(require("./route/prasarana-serah-terima-dinasan.route"));
const prasarana_master_route_1 = __importDefault(require("./route/prasarana-master.route"));
const prasarana_dash_global_route_1 = __importDefault(require("./route/prasarana-dash-global.route"));
const prasarana_struktur_organisasi_slipgaji_route_1 = __importDefault(require("./route/prasarana-struktur-organisasi-slipgaji.route"));
const activity_route_1 = __importDefault(require("./route/activity.route"));
const prasarana_data_kelambatan_route_1 = __importDefault(require("./route/prasarana-data-kelambatan.route"));
const prasarana_merge_file_route_1 = __importDefault(require("./route/prasarana-merge-file.route"));
const prasarana_kategori_route_1 = __importDefault(require("./route/prasarana-kategori.route"));
const path = require('path');
const fs = require('fs');
const crypto_js_1 = __importDefault(require("crypto-js"));
const encryptionKey = crypto_js_1.default.enc.Hex.parse('0123456789abcdef0123456789abcdef'); // Kunci 32 byte (256-bit)
const iv = crypto_js_1.default.enc.Hex.parse('abcdef9876543210abcdef9876543210'); // IV 16 byte
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "*" }));
app.use('/static', express_1.default.static('upload'));
// app.use('/file/:token/:filename', (req, res, next) => {
// 	let pathFile: string;
// 	let filename = req.params.filename
// 	let token = req.params.token
// 	if (fs.existsSync(path.join(__dirname, "../dist/upload/file"))) {
// 		pathFile = path.join(__dirname, "../dist/upload/file/"+ filename);
// 		console.log('tes ',pathFile);
// 	  } else {
// 		pathFile = path.join(__dirname, "../upload/file/"+filename);
// 		console.log('tes 1 ',pathFile);
// 	  }
// if (!token) {
// 	return res.status(403).send('Invalid');
//   }
//   let h  = {"alg":"RS256"};
//   let verifyOptions = {
// 	header:  h,
// 	issuer: "dashboard-executive",
//   };
//   let privateKey = fs.readFileSync('./jwt_rs256_private.key', 'utf8');
//   jwt.verify(
// 	token,
// 	// envConfig.env().ACCESS_TOKEN_SECRET,
// 	privateKey,
// 	verifyOptions,
// 	(err: any, data: any) => {
// 	  if (err) {
// 		return res.status(403).send('Invalid or expired.');
// 	  }
// 	  if (fs.existsSync(pathFile)) {
// 		res.sendFile(pathFile);
// 	} else {
// 		res.status(404).send('File not found');
// 	}
// 	}
//   );
// });
app.use('/file/:token/*', (req, res, next) => {
    let pathFile;
    let filename = req.params[0];
    // let filename = req.params.filename
    let token = req.params.token;
    try {
        const decryptedTimestamp = decryptTimestamp(token);
        if (decryptedTimestamp) {
            return res.status(404).send('Forbidden');
        }
        if (fs.existsSync(path.join(__dirname, "../dist/upload/"))) {
            pathFile = path.join(__dirname, "../dist/upload/" + filename);
        }
        else {
            pathFile = path.join(__dirname, "../upload/" + filename);
        }
        res.sendFile(pathFile);
    }
    catch (error) {
        // console.error((error as Error).message);
        return res.status(500).send(error.message);
        // return res.status(500).send('Error Internal Server');
    }
    // if (!token) {
    // 	return res.status(403).send('Invalid');
    //   }
    //   let h  = {"alg":"RS256"};
    //   let verifyOptions = {
    // 	header:  h,
    // 	issuer: "dashboard-executive",
    //   };
    //   let privateKey = fs.readFileSync('./jwt_rs256_private.key', 'utf8');
    //   jwt.verify(
    // 	token,
    // 	// envConfig.env().ACCESS_TOKEN_SECRET,
    // 	privateKey,
    // 	verifyOptions,
    // 	(err: any, data: any) => {
    // 	  if (err) {
    // 		return res.status(403).send('Invalid or expired.');
    // 	  }
    // 	  if (fs.existsSync(pathFile)) {
    // 		res.sendFile(pathFile);
    // 	} else {
    // 		res.status(404).send('File not found');
    // 	}
    // 	}
    //   );
});
app.use((0, express_fileupload_1.default)({
    createParentPath: true,
    // tempFileDir: "tmp",
    // useTempFiles: true,
}));
app.use(body_parser_1.default.json({ limit: '100mb' }));
app.disable('x-powered-by');
let loadEnv = env_config_1.default.env();
const port = loadEnv.PORT ? Number(loadEnv.PORT) : 3001;
const host = node_process_1.default.env.APP_HOST;
const appEnv = loadEnv.APP_FOR;
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Dashboard Executive API',
        version: '1.0.0',
    },
    // servers: [
    //   {
    //     url: process.env.APP_HOST,
    //     // description: "Local-Development server",
    //   },
    // ],
    components: {
        schemas: ['./src/validation'],
        securitySchemes: {
            bearer: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearer: [],
        },
    ],
};
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: [appEnv == 'local' ? './src/route/*' : './route/*'],
};
function decryptTimestamp(encryptedData) {
    // Ubah base64 URL-safe ke base64
    let statuss = false;
    const base64 = encryptedData.replace(/-/g, '+').replace(/_/g, '/') + '=='.slice(0, (4 - (encryptedData.length % 4)) % 4); // Padding '='
    const decryptedBytes = crypto_js_1.default.AES.decrypt(base64, encryptionKey, { iv: iv });
    const decryptedText = decryptedBytes.toString(crypto_js_1.default.enc.Utf8);
    const [timestamp, expirationTimestamp] = decryptedText.split(',').map(Number);
    if (Date.now() > expirationTimestamp) {
        // throw new Error('Token has expired');
        statuss = true;
    }
    return statuss;
}
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
loadEnv.APP_FOR == 'prod' ? '' : app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use(log_middleware_1.uniqueCodeMiddleware);
app.use(log_middleware_1.logger.request);
app.use(log_middleware_1.logger.response);
app.use(log_middleware_1.logErrResponseMiddleware);
app.get('/', (req, res) => {
    return res.status(200).json('Welcome!');
});
app.use('/api/v1', global_parameter_route_1.default, auth_route_1.default, menu_route_1.default, role_route_1.default, users_route_1.default, action_route_1.default, report_income_cost_route_1.default, report_type_route_1.default, report_average_delay_route_1.default, report_sf_trainset_route_1.default, report_polsuska_route_1.default, report_fumigasi_route_1.default, report_pest_route_1.default, report_capacity_1.default, report_facility_maintenance_route_1.default, report_fumigasi_route_1.default, report_washing_facilities_route_1.default, report_otc_route_1.default, report_check_route_1.default, report_performance_by_train_number_route_1.default, report_vol_fare_route_1.default, report_passenger_income_route_1.default, report_station_performance_route_1.default, station_route_1.default, distance_route_1.default, report_sp_get_afc_route_1.default, report_od_peak_sml_route_1.default, master_station_route_1.default, report_delete_route_1.default, report_approval_route_1.default, dashboard_route_1.default, subsidi_route_1.default, prasarana_income_cost_route_1.default, prasarana_struktur_organisasi_report_route_1.default, prasarana_struktur_organisasi_sertifikasi_route_1.default, prasarana_struktur_organisasi_route_1.default, prasarana_daftar_hadir_dinasan_route_1.default, prasarana_struktur_organisasi_mcu_route_1.default, konfigurasi_tanda_tangan_route_1.default, prasarana_dashboard_maintenance_route_1.default, prasarana_dashboard_operation_route_1.default, prasarana_maintenance_route_1.default, prasarana_operation_route_1.default, prasarana_serah_terima_dinasan_route_1.default, prasarana_operation_route_1.default, prasarana_master_route_1.default, prasarana_maintenance_route_1.default, prasarana_dash_global_route_1.default, prasarana_struktur_organisasi_slipgaji_route_1.default, activity_route_1.default, prasarana_data_kelambatan_route_1.default, prasarana_merge_file_route_1.default, prasarana_kategori_route_1.default);
app.use('*', (req, res) => {
    return res.status(404).json('What are you looking for');
});
if (node_process_1.default.env.NODE_CLUSTER == 'YES') {
    if (node_cluster_1.default.isPrimary) {
        console.log(`Number of CPUs is ${node_os_1.default.cpus().length}`);
        console.log(`Master ${node_process_1.default.pid} is running`);
        // Fork workers.
        for (let i = 0; i < node_os_1.default.cpus().length; i++) {
            node_cluster_1.default.fork();
        }
        node_cluster_1.default.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
            console.log("Let's fork another worker!");
            console.log('with code: ' + code);
            node_cluster_1.default.fork();
        });
        // console.log(`worker pid=${process.pid}`);
    }
    else {
        startExpress();
    }
}
else {
    // jika tidak mau di cluster langsung call function startExpress
    startExpress();
}
function startExpress() {
    app.listen(port, () => {
        console.log(`Server running at ${host}${port}`);
    });
}
