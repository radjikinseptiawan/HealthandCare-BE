"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUpData = exports.showUpData = void 0;
const data_1 = require("./data");
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
    const { task, description, id } = request.payload;
    const time = Date.now();
    const hours = time.toLocaleString();
    const newTask = {
        id: id,
        task: task,
        description: description,
        time: hours,
        status: false
    };
    data_1.data.push(newTask);
    const isSuccess = data_1.data.map((task) => newTask.task === task);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: "success add an task"
        });
        response.code(201);
        return response;
    }
};
exports.addUpData = addUpData;
