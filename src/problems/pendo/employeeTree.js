// Create an O(1) lookup of employees

export const employeeTree = [
  {
    name: "jane",
    role: "manager",
    id: "2334",
    directReports: [
      {
        name: "jim",
        role: "developer",
        id: "23423",
        directReports: [],
      },
      {
        name: "jill",
        role: "lead developer",
        id: "4135",
        directReports: [
          {
            name: "jack",
            role: "associate developer",
            id: "8989",
            directReports: [
              {
                name: "steve",
                role: "bad ass",
                id: "1234",
                directReports: [
                  {
                    name: "peter",
                    role: "baby",
                    id: "9999",
                    directReports: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "jack",
    role: "manager",
    id: "5676",
    directReports: [],
  },
];

export const flattenEmployeeTreeRec = (employees) => {
  let result = {};
  employees.forEach((e) => {
    result[e.id] = e;
    if (e.directReports.length > 0) {
      result = { ...result, ...flattenEmployeeTreeRec(e.directReports) };
    }
  });
  return result;
};

export const flattenEmployeeTreeItr = (employees) => {
  let result = {};
  let queue = [];
  employees.forEach((e) => {
    result[e.id] = e;
    if (e.directReports.length > 0) {
      queue.push(e.directReports);
      while (queue.length > 0) {
        const drs = queue.shift();
        drs.forEach((dr) => {
          result[dr.id] = dr;
          if (dr.directReports.length > 0) {
            queue.push(dr.directReports);
          }
        });
      }
    }
  });
  return result;
};
