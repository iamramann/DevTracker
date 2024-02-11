import axios from "axios";
import conf from "../conf";

const API_ROUTES = {
  associatedWith: `${conf.endPoint}/values/associates`,
  associatedWithT: `${conf.endPoint}/values/associates-test`,
  tasksType: `${conf.endPoint}/values/task-types`,
  addMyTask: `${conf.endPoint}/addTask/add-task`,
};

const API_HANDLERS = {
  getTaskAssociatedWithList: function () {
    return axios
      .get(`${API_ROUTES.associatedWith}`)
      .then((res) => res.data)
      .catch(function (error) {
        if (error.response) {
          throw new Error("Failed to fetch the associated list items.");
        }
      });
  },

  getTasksTypeList: function () {
    return axios
      .get(`${API_ROUTES.tasksType}`)
      .then((res) => res.data)
      .catch(function (error) {
        if (error.response) {
          throw new Error("Failed to fetch the task types.");
        }
      });
  },

  addMyTask: function (payload) {
    return axios
      .post(`${API_ROUTES.associatedWithT}`, { namess: "test" })
      .then((res) => res.data)
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
          throw new Error("Failed to fetch the task types.");
        }
      });
  },
};

export default API_HANDLERS;
