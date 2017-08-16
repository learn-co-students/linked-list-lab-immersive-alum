function getName(node){
  return node.name
}

function headNode(node, collection){
  return collection[node]
}

function next(node, collection){
  let nextAddress = node.next
  // console.log(node)
  console.log(nextAddress)
  // console.log(collection)
  // console.log(collection[node])
  return collection[nextAddress]

}
