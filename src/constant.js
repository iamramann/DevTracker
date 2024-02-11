export const Status = Object.freeze({
  Fulfilled: "fulfilled",
  Rejected: "rejected",
});

export function getTaskAssociatedWithList() {
  return [
    {
      id: 1,
      name: "Client",
    },
    {
      id: 2,
      name: "Internal",
    },
  ];
}

export function getTasksTypeList() {
  return [
    {
      id: 1,
      name: "Bug",
    },
    {
      id: 2,
      name: "Feature",
    },
    {
      id: 3,
      name: "Miscellaneous",
    },
  ];
}

export function getAnalytics() {
  return [
    {
      id: 1,
      name: "Bugs",
      value: 10,
      colorScheme: "from-orange-900 to-red-800",
    },
    {
      id: 2,
      name: "Features",
      value: 10,
      colorScheme: "from-teal-900 to-green-800",
    },
    {
      id: 3,
      name: "Miscellaneous",
      value: 10,
      colorScheme: "from-yellow-900 to-orange-800",
    },
    {
      id: 4,
      name: "Client Tasks",
      value: 10,
      colorScheme: "from-teal-900 to-blue-800",
    },
    {
      id: 5,
      name: "Internal Tasks",
      value: 10,
      colorScheme: "from-teal-900 to-pink-800",
    },
  ];
}
