import { products } from "../../assets/data";

export let initialObjectProducts = {
  products: products,
};

let eventsInObjet = {
  "EDIT FORM": function (state, action) {
    let { id, formData } = action.payload;
    let newArr = [...state.products];
    let objIndex = newArr.findIndex((item) => item.id === id);
    newArr[objIndex].productName = formData.productName;
    newArr[objIndex].productDescription = formData.productDescription;
    newArr[objIndex].productPrice = parseInt(formData.productPrice);
    console.log(formData.active);
    newArr[objIndex].active = formData.active === "on" ? true : false;
    return { ...state, products: newArr };
  },
  "ADD FORM": function (state, action) {
    let newArr = [...state.products];
    action.payload.id = newArr.length === 0 ? 1 : newArr.at(-1).id + 1;
    newArr.push(action.payload);
    return { ...state, products: newArr };
  },
};

export function productsReducer(state, action) {
  let handle = eventsInObjet[action.type];
  if (action && action.type) {
    return handle(state, action);
  }

  return state;
}
