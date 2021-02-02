const student=[
    {id:21,name:'omar sani'},
    {id:31,name:'manna sani'},
    {id:41,name:'moyori'},
    {id:71,name:'deep jol'}
]

const names=student.map(s=>s.name);
console.log(names);

const ids=student.map(s=>s.id);
console.log(ids);

const bigger=student.filter(s=>s.id>40);
console.log(bigger);

const bigger1=student.find(s=>s.id>40);
console.log(bigger1);