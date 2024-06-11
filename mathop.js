exports.square=(n)=>
{
    return n*n;
}
exports.cube=(n)=>
{
    return n*n*n;
}
exports.arymax=(ary)=>
{
    let max = ary[0];
    for(let i =1;i<ary.length;i++)
    {
        if(max<ary[i])
        { 
            max = ary[i];
        }
    }
    return max;
}