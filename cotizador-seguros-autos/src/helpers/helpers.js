export const autos = [
  {
    nombre: "Mustang",
    marca: "Ford",
    procedencia: "America",
    price: 10000,
    image:
      "https://st.motortrend.com/uploads/sites/5/2019/01/2020-Ford-Mustang-Shelby-G500-1.jpg",
  },
  {
    nombre: "Accent",
    marca: "Hyundai",
    procedencia: "Asia",
    price: 12000,
    image:
      "https://cdn.wheel-size.com/automobile/body/hyundai-accent-2017-2021-1600264773.3505185.jpg",
  },
  {
    nombre: "A8",
    marca: "Audi",
    procedencia: "Europa",
    price: 114759,
    image:
      "https://s.aolcdn.com/commerce/autodata/images/USC70AUC041B021001.jpg",
  },
  {
    nombre: "Model_C",
    marca: "Mercedes Benz",
    procedencia: "Europa",
    price: 66460,
    image:
      "https://media.sketchfab.com/models/27d0ec784ceb4c80a03cc17ebea8acb4/thumbnails/b2da289082fc416b8732b6a0dcfc7e48/c89559c468584d8e96183e99e1ef9de4.jpeg",
  },
  {
    nombre: "Elantra",
    marca: "Hyundai",
    procedencia: "Asia",
    price: 34890,
    image: "https://mantallanta.com/img/cms/Hyundai%20Elantra%202012%20.jpg",
  },
  {
    nombre: "Civic",
    marca: "Honda",
    procedencia: "Asia",
    price: 28990,
    image:
      "https://i1.wp.com/www.deagenciapanama.com/wp-content/uploads/2020/02/Lunar-Silver-Metallic-SI-160160.jpg?resize=640%2C466&ssl=1",
  },
];

export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "Europa":
      incremento = 1.3;
      break;
    case "America":
      incremento = 1.15;
      break;
    case "Asia":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}
