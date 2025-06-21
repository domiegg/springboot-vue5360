const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootrpb10/",
            name: "springbootrpb10",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootrpb10/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小学家校一体“作业帮”的设计与实现"
        } 
    }
}
export default base
