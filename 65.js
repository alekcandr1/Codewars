function getAverage(marks){
   const sum = marks.reduce((acc, number) => acc + number, 0);
   return sum / marks.length;
}