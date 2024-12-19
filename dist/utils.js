"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = exports.seeDetailData = exports.editData = exports.deleteData = exports.addUpData = exports.showUpData = void 0;
const data_1 = require("./data");
const nanoid_1 = require("nanoid");
const showUpData = (request, h) => {
    const response = h.response({
        status: 200,
        data: {
            task: data_1.data
        }
    });
    return response;
};
exports.showUpData = showUpData;
const addUpData = (request, h) => {
    const { task, description, status = false } = request.payload;
    const time = Date.now();
    const idTasks = (0, nanoid_1.nanoid)(16);
    const buildTask = {
        id: idTasks,
        task: task,
        description: description,
        time: time,
        status: status
    };
    data_1.data.push(buildTask);
    const isSuccess = data_1.data.map((task) => buildTask.task === task);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: "sukses menambah data"
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: "failed",
        message: 'Gagal menambahkan data'
    });
    response.code(400);
    return response;
};
exports.addUpData = addUpData;
const deleteData = (request, h) => {
    const { id } = request.params;
    const index = data_1.data.findIndex(data => data.id === id);
    if (index !== -1) {
        data_1.data.splice(index, 1);
        const response = h.response({
            status: "success",
            message: "Task berhasil di hapus!"
        });
        response.code(204);
        return response;
    }
    const response = h.response({
        status: "failed",
        message: "Task gagal di hapus!"
    });
    response.code(404);
    return response;
};
exports.deleteData = deleteData;
const editData = (request, h) => {
    const { id } = request.params;
    const { task, description, status } = request.payload;
    const index = data_1.data.findIndex(index => index.id === id);
    if (index !== -1) {
        data_1.data[index] = {
            ...data_1.data[index],
            task: task,
            description: description,
            status: status
        };
        const response = h.response({
            message: "Berhasil mengedit data",
            status: "success"
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        message: "Gagal mengedit data",
        status: 'fail'
    });
    response.code(404);
    return response;
};
exports.editData = editData;
const seeDetailData = (request, h) => {
    const { id } = request.params;
    const filterId = data_1.data.filter(ftr => ftr.id === id);
    if (filterId) {
        const catchData = h.response({
            status: 'success',
            data: {
                filterId
            },
        });
        catchData.code(20);
        return catchData;
    }
    const response = h.response({
        message: "Gagal!, data tidak ditemukan",
        status: "failed"
    });
    response.code(404);
    return response;
};
exports.seeDetailData = seeDetailData;
const changeStatus = (request, h) => {
    const { id } = request.params;
    const { status } = request.payload;
    const indexing = data_1.data.findIndex(dataTask => dataTask.id === id);
    if (indexing !== -1) {
        data_1.data[indexing] = {
            ...data_1.data[indexing],
            status: status
        };
        const response = h.response({
            status: 'success',
            message: 'Berhasil mengubah status!'
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'failed',
        message: 'Gagal mengubah status!. id tidak ditemukan'
    });
    response.code(404);
    return response;
};
exports.changeStatus = changeStatus;
