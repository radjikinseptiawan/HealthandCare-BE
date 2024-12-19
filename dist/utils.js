"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editData = exports.deleteData = exports.addUpData = exports.showUpData = void 0;
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
            message: "success add a task"
        });
        response.code(201);
        return response;
    }
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
        response.code(201);
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
        response.code(201);
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
