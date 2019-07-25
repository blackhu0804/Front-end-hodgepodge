var strStr = function(haystack, needle) {
    // if(needle.length === 0) return 0;

    return haystack.indexOf(needle);
    // for(let i = 0; i < haystack.length - 1;i++) {
    //   if(needle[0] === haystack[i]) {
    //     if(needle === haystack.substr(i, needle.length - 1)) {
    //       return i;
    //     }
    //   }
    // }
    // return -1;
};

strStr('hello', 'll');