import { link } from "fs";

function getName(node){
return node.name
}

function headNode(linkedList, collection){
return collection[linkedList]
}

function next(head, collection){
return collection[head.next]
}

function nodeAt(index, linkedList, collection){
    let nextNode = collection[linkedList]
    for(let i = 0; i < index; i++){
        nextNode = collection[nextNode.next]
    }
    return nextNode
}

function addressAt(index, linkedList, collection){
    let node = collection[linkedList]
    if (index === 0){
        return linkedList
    } else {
    for(let i = 0; i < index - 1; i++){
        node = collection[node.next]
    }
}
    return node.next
}

function indexAt(node, collection, linkedList){
    let index = 0
    let currentNode = collection[linkedList]
while(currentNode != node){
index++
currentNode = collection[currentNode.next]
    }
    return index
}

function insertNodeAt(index, key, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    collection[key].next = previousNode.next
    collection[addressAt(index -1, linkedList, collection)].next = key
}

function deleteNodeAt(index, linkedList, collection){
    let currentNode = nodeAt(index, linkedList, collection)
    // change previous node.next to current node.next
    collection[addressAt(index -1, linkedList, collection)].next = currentNode.next
    // change current node.next to null
    collection[addressAt(index, linkedList, collection)].next = null
//0
//1
//2
}