
export const changeSheet = (sheet) => {
  return {
   type: 'CHANGE_SHEET',
   payload: sheet
 }
}
export const saveCategoryList = (arr) => {
  return {
   type: 'ACTIVE_CATEGORIES',
   payload: arr
 }
}
export const saveCategoryItem= (id) => {
  return {
   type: 'ACTIVE_ITEM',
   payload: id
 }
}