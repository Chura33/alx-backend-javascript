export default getStudentsByLocation(arr, city){
  return arr.filter(obj=>obj.location === city)
}
