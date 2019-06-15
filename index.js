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