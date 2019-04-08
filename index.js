/*3. Write a function called getName, that takes in a node and returns the individual's name

4. Write a function called next that takes in a node, and can return the next node.  We need to provide that function our collection of nodes as an argument.

5. Write a function called nodeAt that passed in an index returns the node at that index.  Remember that a linked list has a pointer to the head. */

function getName(node){
  return node.name
}

function headNode(linkedlist, collection){
  return collection[`${linkedlist}`]
}

function next(node, collection){
  let nextAddress = node.next;
  return collection[`${nextAddress}`]
}

function nodeAt(index, linkedlist, collection){
  console.log('index', index, 'linkedlist', linkedlist, 'collection', collection)
  let currentNode = headNode(linkedlist, collection)
  for(let i = 0; i < index; i++){
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

