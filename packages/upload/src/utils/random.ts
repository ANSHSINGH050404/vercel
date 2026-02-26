const MAX_LEN=5;


export function generateRandomID() {
    let ans="";
    const subset="uf61r36r78t#$^&%^^&vjkhdbjbjshvbjcbaukdgcdguigequr6%^&";
     for(let i=0;i<MAX_LEN;i++){
       ans += subset[Math.floor(Math.random() * subset.length)];
     }
     return ans;
}


