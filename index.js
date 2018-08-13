let getName=(node)=>{
  return node["name"]
}
let node = {name: 'Susie'}
// console.log(getName(node));

// 2) #headNode should return head node of the linked list:
// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let lastNode = {name: 'charlie', next: null}
// let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
// let linkedList = 'whana'
// let head = collection[linkedList]

// expect(headNode(linkedList, collection)).toEqual(head)
let headNode=(linkedList,collection)=>{
  // console.log("collection");
  // console.log(collection);
  // console.log("linkedList");
  // console.log(linkedList);
  // console.log(collection[linkedList]);
  // return "done"
  return collection[linkedList]
}

// console.log(headNode(linkedList, collection));


// 1) #next should return the following node every time it is called:
// 2) #next returns the correct node when called multiple times:
// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let lastNode = {name: 'charlie', next: null}
// let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
// let linkedList = 'whana'
// let head = collection[linkedList]
// expect(next(head, collection)).toEqual(secondNode)
let next = (head,collection)=>{
  // console.log(head);
  // console.log(collection);
  // console.log(collection[head["next"]]);
  return (collection[head["next"]]);
}
// console.log(next(head,collection));


// 1) #nodeAt should return the node at the provided index:
// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let lastNode = {name: 'charlie', next: null}
// let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
// let linkedList = 'whana'
let nodeAt=(index,linkedList,collection)=>{
  // console.log(`linked list at: ${linkedList}`);
  // console.log(`first LL: ${collection[linkedList]["name"]}`);
  let current = null
  for(let i=0;i<=index;i++){
    // console.log(i);
    if(i==0){current = collection[linkedList]}
    else { current = collection[current["next"]]}
    // console.log(current);
  }
  // console.log(current["name"]);
  return current
  // return "done"
}
// console.log(nodeAt(2, linkedList, collection))


// 1) #addressAt should return the address of the node at the address:
// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let lastNode = {name: 'charlie', next: null}
// let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
// let linkedList = 'whana'
let addressAt = (index,linkedList,collection)=>{
  //if index is 0, then the address is what is stored in variable linkedList
  if(index == 0){return linkedList}
  //the previous index's next is the desired index;s address
  let current = null
  let address = null
  for(let i=0;i<index;i++){
    if(i==0){ current = collection[linkedList]}
    else{current = collection[current["next"]]}
    address = current["next"]
  }
  return address
  // console.log("done");
}
// console.log(addressAt(1, linkedList, collection))//.toEqual('rkjasj')


// 1) #indexAt should return the index of the provided node:
// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let lastNode = {name: 'charlie', next: null}
// let linkedList = 'whana'
// let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
let indexAt = (node,collection,linkedList)=>{
  // console.log(node);
  let counter = 0;
  let current = linkedList
  // console.log(current);                      //whana
  // console.log(collection[current]);          //{ name: 'susie', next: 'rkjasj' }
  // console.log(collection[current]["name"]);  //susie
  // console.log(collection[current]["next"]);     //rkjasj
  // console.log(node["name"]);
  // console.log(node["next"]);

  while(collection[current]["next"] != null){
    //if deep equal variable current and arugment node,  then return counter
    if(collection[current]["name"] == node["name"] && collection[current]["next"]== node["next"]){
      return counter
    }
    //else counter is incremeneted
    counter++
    //current is now current.next
    current=collection[current]["next"]
  }
  return "done"
}
// console.log(indexAt(firstNode, collection, linkedList))//.toEqual(0)
// console.log(indexAt(secondNode, collection, linkedList))//.toEqual(1)
// **************************************************************************

// 1) #insertNodeAt should set the next property of the inserted node:
// 2) #insertNodeAt should set the next property of the node previous
//   to the inserted node:
// 3) #insertNodeAt should insert the node at the provided index,
//   while maintaining order of all the other nodes:
let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let newNode = {name: 'jill', next: ''}
let lastNode = {name: 'charlie', next: null}
let collection = {rkjasj: secondNode,
  asnan: lastNode,
  whana: firstNode,
  ajhsak: newNode}
let linkedList = 'whana'
let insertNodeAt = ()=>{
  return "done"
}
insertNodeAt(1, 'ajhsak', linkedList, collection)
console.log(collection);
//expect(newNode.next).toEqual('rkjasj')
