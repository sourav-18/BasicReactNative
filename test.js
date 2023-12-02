let a = [
  {
    aadharNumbe: '1234223',
    candidateName: 'sourav',
    time: 1701033442473,
    _id: '6563b5e2ed551c6d7a34a69c',
    count: 0
  },
  {
    aadharNumbe: '1234225',
    candidateName: 'das',
    time: 1701033442473,
    _id: '6563b5e2ed551c6d7a34a69c',
    count: 0
  }
]

a.forEach((Data)=>
Data.count=0
)

let transformedObj = a.reduce((acc, obj) => {
  acc[obj.aadharNumbe] = obj;
  return acc;
}, {});
let c=1234225;
console.log(transformedObj[c].count++)
console.log(transformedObj)
  
//   console.log(transformedObj);