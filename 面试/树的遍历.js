function Front(Root){
    if(Root == null)
        return;
    console.log(Root.val)
    middle(Root.left)
    middle(Root.right)
}

function middle(Root){
    if(Root == null)
        return;
    middle(Root.left)
    console.log(Root.val)
    middle(Root.right)
}

function Back(Root){
    if(Root == null)
        return;
    middle(Root.left)
    middle(Root.right)
    console.log(Root.val)
}

//深度遍历
function test(root){
    let res = []
    res.push(root)
    let children = root.children;
    return dfs(children);
}
function dfs(children){
    if(children.length==0){
        return [];
    }
    let res = []
    for(let i = 0;i<children.length;i++){
        res.push(test(children[i]))
    }
    return res;
}