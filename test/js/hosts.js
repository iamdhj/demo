var fs = require('fs'),
    https = require('https'),
    hostsFile, localUpdated, lastUpdated,
    updateRegex = new RegExp('# Last updated: ([\\d-]+)'),
    hostsPath = 'C:\\Windows\\System32\\drivers\\etc\\hosts',
    updateUrl = 'https://raw.githubusercontent.com/racaljk/hosts/master/hosts';
hostsPath = 'test.txt';
console.log('开始更新hosts文件\n------------------------------------------------');

console.log('解析本地hosts文件...');
hostsFile = fs.readFileSync(hostsPath).toString();
localUpdated = (hostsFile.match(updateRegex) || [,'null'])[1];
console.log('本地hosts最后更新日期:' + localUpdated + '\n');

console.log('请求线上hosts文件...');
https.get(updateUrl, function(res){
    var content = '';
    res.on('data', (chunk) => {
        content += chunk;
    });
    res.on('end', ()=>{
        lastUpdated = (content.match(updateRegex) || [])[1];
        console.log('线上hosts最后更新日期:' + localUpdated + '\n');

        if(localUpdated[1] == localUpdated[1]){
            console.log('更新日期一致，更新中止')
        }else{
            hostsFile = hostsFile.replace(/(?:\r\n)?# Copyright \(c\) 2014-2016, racaljk(?:.*[\r\n]+)+# Modified hosts end[\r\n]+/, '');
            fs.writeFile('test.txt', hostsFile + '\r\n' + content, function(error){
               if(error)console.log(error);
                console.log('更新完成');
            });
        }
    });
}).on('error', function(){
    console.log('无法访问更新地址，更新中止');
});

