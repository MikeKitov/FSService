const getJsonResponse = require("../fs");

Receiveds = {
  Received0: {
    path: "",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FSService/derectoris/home",
      name: "home",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:21:06.725Z",
      updated: "2023-12-08T13:22:36.292Z",
      children: ["package.json"],
    },
  },
  Received1: {
    path: "./derectoris/products/category/123",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FSService/derectoris/products/category/123",
      name: "123",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:26:23.159Z",
      updated: "2023-12-08T13:26:30.358Z",
      children: ["123.txt"],
    },
  },
  Received2: {
    path: "./derectoris/products/category/category1",
    data: "{Error: доступ запрешен}",
  },
  Received3: {
    path: "./derectoris/products/category/category2",
    data: null,
  },
  Received4: {
    path: "./derectoris/home",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FSService/derectoris/home",
      name: "home",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:21:06.725Z",
      updated: "2023-12-08T13:22:36.292Z",
      children: ["package.json"],
    },
  },
  Received5: {
    path: "./derectoris/products",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FSService/derectoris/products",
      name: "products",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:24:52.692Z",
      updated: "2023-12-08T13:25:41.433Z",
      children: ["category", "home.txt"],
    },
  },
  Received6: {
    path: "./derectoris/products/category",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FSService/derectoris/products/category",
      name: "category",
      isFolder: true,
      size: 0,
      created: "2023-12-08T13:25:41.433Z",
      updated: "2023-12-08T13:45:43.234Z",
      children: ["123", "main.txt"],
    },
  },
  Received7: {
    path: "./derectoris/about/about.txt",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FSService/derectoris/about/about.txt",
      name:"about.txt",
      isFolder:false,
      size:11,
      created:"2023-12-08T13:26:58.616Z",
      updated:"2023-12-08T13:27:05.651Z",
      children:[]
    }
  },
  Received8: {
    path: "./derectoris/contact/contact.txt",
    data: {
      path: "C:/Users/Кирилл/Desktop/Стажировка/FSService/derectoris/contact/contact.txt",
      name:"contact.txt",
      isFolder:false,
      size:84,
      created:"2023-12-08T13:27:31.427Z",
      updated:"2023-12-08T13:28:20.242Z",
      children:[]
    }
  },
  Received9: {
    path: "./derectoris/contact/dffdf",
    data: null,
  },
  Received10: {
    path: "./derectoris/contact/d.txt",
    data: null,
  },
}

for (let i in Receiveds) {
  path = "";
  data = {};
  for (let j in Receiveds[i]) {
    if (j === "path") {
      path = Receiveds[i][j];
    } else {
      data = Receiveds[i][j];
    }
  }
  test(i, async () => {
    try {
      expect(JSON.stringify(await getJsonResponse(path))).toBe(JSON.stringify({data: data}));
    } catch(err) {
      console.error(err);
    }
  });
}
