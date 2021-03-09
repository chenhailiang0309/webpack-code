function setGraph() {
    var nodes = [ //
        {
            "name": "A",
            "value": [""],
            "category": "案件",
            "symbolSize": [168, 82],
            symbol: 'rect',
            tooltip: {
                formatter: function(params) {
                    // console.log(params)
                    return '<div class="tootip-box">' +
                        '<ul>' +
                        '<li><span class="label">案号</span><span class="value">民初字第123号</span></li>' +
                        '<li><span class="label">案由</span><span class="value">交通肇事罪</span></li>' +
                        '<li><span class="label">立案日期</span><span class="value">2017-10-01</span></li>' +
                        '<li><span class="label">结案日期</span><span class="value">2017-11-01</span></li>' +
                        '<li><span class="label">原告</span><span class="value">张三</span></li>' +
                        '<li><span class="label">被告</span><span class="value">李四、王五</span></li>' +
                        '<li><span class="label">状态</span><span class="value">未结</span></li>' +
                        '</ul>' +
                        '</div>'
                }
            },
            label: {
                lineHeight: 20,
                formatter: [
                    '{title|案件：XXX}',
                    '{a|审理程序：一审}',
                    '{b|状态：未结}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff',
                        fontSize: 16
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FF8755' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF5666' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            "name": "C",
            "value": [],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|张三}',
                    '{a|上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },
        {
            "name": "D",
            "value": ["人D"],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|王五}',
                    '{a|被上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },
        {
            "name": "B",
            "value": [""],
            "category": "案件",
            "symbolSize": [168, 82],
            symbol: 'rect',
            tooltip: {
                formatter: function(params) {
                    // console.log(params)
                    return '<div class="tootip-box">' +
                        '<ul>' +
                        '<li><span class="label">案号</span><span class="value">民初字第234号</span></li>' +
                        '<li><span class="label">案由</span><span class="value">交通肇事罪</span></li>' +
                        '<li><span class="label">立案日期</span><span class="value">2017-10-01</span></li>' +
                        '<li><span class="label">结案日期</span><span class="value">2017-11-01</span></li>' +
                        '<li><span class="label">原告</span><span class="value">张三</span></li>' +
                        '<li><span class="label">被告</span><span class="value">李四、刘某</span></li>' +
                        '<li><span class="label">状态</span><span class="value">未结</span></li>' +
                        '</ul>' +
                        '</div>'
                }
            },
            label: {
                lineHeight: 20,
                formatter: [
                    '{title|案件：XXX}',
                    '{a|审理程序：再审}',
                    '{b|状态：未结}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff',
                        fontSize: 16
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FF8755' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF5666' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            "name": "E",
            "value": ["人E"],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|李四}',
                    '{a|被上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },
        {
            "name": "F",
            "value": ["人F"],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|刘某}',
                    '{a|被上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },
    ];

    var links = [ //
        {
            "source": "A",
            "target": "B",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '关联案件'
                }
            },
        },
        {
            "source": "A",
            "target": "E",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '被告'
                }
            },
        },
        {
            "source": "A",
            "target": "C",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '原告'
                }
            },
        },
        {
            "source": "A",
            "target": "D",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '被告'
                }
            },
        },
        {
            "source": "B",
            "target": "C",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '原告'
                }
            },
        },
        {
            "source": "B",
            "target": "E",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '被告'
                }
            },
        },
        {
            "source": "B",
            "target": "F",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '被告'
                }
            },
        }
    ];

    return {
        title: {
            text: '',
            top: 'top',
            left: 'center',
        },
        tooltip: {
            show: true,
            trigger: 'item',
            backgroundColor: '#FFF',
            padding: 0,
            textStyle: {
                color: '#585656',
            },
            formatter: function(params) {
                if (params.dataType == 'node') {
                    // console.log(params)
                    return ''
                } else {
                    return ''
                }
            }
        },
        legend: [],
        animation: false,
        series: [ //
            {
                type: 'graph',
                layout: 'force',
                data: nodes,
                links: links,
                categories: [ //
                    {
                        name: '案件',
                        itemStyle: {
                            color: '#c23531'
                        },
                    },
                    {
                        name: '人',
                        itemStyle: {
                            color: 'skyblue'
                        },
                    },
                ],
                edgeSymbol: ['none', 'none'],
                draggable: true, // 节点可拖拽
                roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                focusNodeAdjacency: false, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: '#FFF',
                    formatter: '{b}',
                },
                lineStyle: {
                    color: 'target',
                    opacity: 0.6,
                    curveness: 0
                },
                force: {
                    gravity: 0.05,
                    layoutAnimation: true,
                    repulsion: [500, 1000],
                    edgeLength: [200, 300]
                },
            }
        ]
    };
}

function setPartiesGraph() {
    var nodes = [ //
        {
            "name": "A",
            "value": [""],
            "category": "案件",
            "symbolSize": [168, 82],
            symbol: 'rect',
            tooltip: {
                formatter: function(params) {
                    // console.log(params)
                    return '<div class="tootip-box">' +
                        '<ul>' +
                        '<li><span class="label">案号</span><span class="value">民初字第123号</span></li>' +
                        '<li><span class="label">案由</span><span class="value">交通肇事罪</span></li>' +
                        '<li><span class="label">立案日期</span><span class="value">2017-10-01</span></li>' +
                        '<li><span class="label">结案日期</span><span class="value">2017-11-01</span></li>' +
                        '<li><span class="label">原告</span><span class="value">张三</span></li>' +
                        '<li><span class="label">被告</span><span class="value">李四、王五</span></li>' +
                        '<li><span class="label">状态</span><span class="value">未结</span></li>' +
                        '</ul>' +
                        '</div>'
                }
            },
            label: {
                lineHeight: 20,
                formatter: [
                    '{title|案件：XXX}',
                    '{a|审理程序：一审}',
                    '{b|状态：未结}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff',
                        fontSize: 16
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FF8755' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF5666' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            "name": "C",
            "value": [],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|张三}',
                    '{a|上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },
        {
            "name": "D",
            "value": ["人D"],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|王五}',
                    '{a|被上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },
        {
            "name": "E",
            "value": ["人E"],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|李四}',
                    '{a|被上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },
        /*{
            "name": "F",
            "value": ["人F"],
            "category": "人",
            "symbolSize": 100,
            symbol: 'circle',
            label: {
                lineHeight: 20,
                formatter: [
                    '{name|刘某}',
                    '{a|被上诉方}',
                    '{b|在审案件一件}'
                ].join('\n'),
                rich: {
                    title: {
                        color: '#fff'
                    },
                    a: {
                        color: '#fff'
                    },
                    b: {
                        color: '#fff'
                    },
                    x: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                color: '#08B7B5'
            }
        },*/
    ];

    var links = [ //
        {
            "source": "A",
            "target": "E",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '被告'
                }
            },
        },
        {
            "source": "A",
            "target": "C",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '原告'
                }
            },
        },
        {
            "source": "A",
            "target": "D",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '被告'
                }
            },
        },
        {
            "source": "C",
            "target": "D",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '诉讼相对方'
                }
            },
        },
        {
            "source": "D",
            "target": "E",
            label: {
                show: true,
                color: '#9F9E9E',
                formatter: function(params) {
                    // console.log(params)
                    return '诉讼相对方'
                }
            },
        },
    ];

    return {
        title: {
            text: '',
            top: 'top',
            left: 'center',
        },
        tooltip: {
            show: true,
            trigger: 'item',
            backgroundColor: '#FFF',
            padding: 0,
            textStyle: {
                color: '#585656',
            },
            formatter: function(params) {
                if (params.dataType == 'node') {
                    // console.log(params)
                    return ''
                } else {
                    return ''
                }
            }
        },
        legend: [],
        animation: false,
        series: [ //
            {
                type: 'graph',
                layout: 'force',
                data: nodes,
                links: links,
                categories: [ //
                    {
                        name: '案件',
                        itemStyle: {
                            color: '#c23531'
                        },
                    },
                    {
                        name: '人',
                        itemStyle: {
                            color: 'skyblue'
                        },
                    },
                ],
                edgeSymbol: ['none', 'none'],
                draggable: true, // 节点可拖拽
                roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                focusNodeAdjacency: false, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: '#FFF',
                    formatter: '{b}',
                },
                lineStyle: {
                    color: 'target',
                    opacity: 0.6,
                    curveness: 0
                },
                force: {
                    gravity: 0.05,
                    layoutAnimation: true,
                    repulsion: [500, 1000],
                    edgeLength: [200, 300]
                },
            }
        ]
    };
}

function setLine(xData, yData) {
    return {
        tooltip: {

        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
            axisLabel: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
            data: ['2015', '2016', '2017', '2018', '2019', '2020']
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
            axisLabel: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0'
                },
            },
        },
        series: [{
            type: 'line',
            smooth: true,
            lineStyle: {
                color: '#0485fe'
            },
            itemStyle: {
                normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(140,173,240,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#fff' // 100% 处的颜色
                    }]), //背景渐变色    
                    lineStyle: { // 系列级个性化折线样式  
                        width: 3,
                        type: 'solid',
                        color: "#0180ff" //折线的颜色
                    }
                },
                emphasis: {
                    color: '#0485fe',
                    lineStyle: { // 系列级个性化折线样式  
                        width: 2,
                        type: 'dotted',
                        color: "#0485fe"
                    }
                }
            },
            areaStyle: { normal: {} },
            data: [932, 901, 934, 1290, 1330, 1320],
        }]
    }
}

function setMap(name, arr) {
    var mapArr = ["北京", "天津", "上海", "重庆", "河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江",
        "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "海南", "四川", "贵州", "云南", "陕西",
        "甘肃", "青海", "内蒙古", "广西", "西藏", "宁夏", "新疆", "香港", "澳门", "台湾"
    ]

    var data = []
    for (var i = 0; i < mapArr.length; i++) {
        var flag = false
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].name == mapArr[i]) {
                data.push(arr[j])
                flag = true
                break;
            }
        }
        if (!flag) {
            data.push({
                name: mapArr[i],
                value: 0
            })
        }

    }
    // console.log(data)

    return {
        tooltip: {
            trigger: "item",
            // triggerOn: 'click',
            enterable: true,
            extraCssText: 'text-align:left;font-size:0.16rem;'
        },
        dataRange: {
            orient: "horizontal",
            min: 0,
            max: 1000,
            // max: dataMax,
            x: "0",
            y: "1000%",
            text: ["高", "低"],
            calculable: true,
            itemWidth: 5,
            inRange: {
                color: ["#d3e9f4", "#0d6fb8"]
            }
        },
        geo: {
            show: true,
            map: name,
            mapType: name,
            roam: false
        },
        series: [{
            name: "案件数",
            type: "map",
            map: name, //要和echarts.registerMap（）中第一个参数一致
            itemStyle: {
                normal: {
                    borderColor: '#FFF',
                    borderWidth: 1,
                    // areaColor: {
                    //     type: 'linear',
                    //     x: 0,
                    //     y: 1,
                    //     x2: 0,
                    //     y2: 0,
                    //     colorStops: [{
                    //         offset: 0,
                    //         color: '#061685' // 0% 处的颜色
                    //     }, {
                    //         offset: 1,
                    //         color: ' #0244ff' // 100% 处的颜色
                    //     }],
                    //     globalCoord: false // 缺省为 false
                    // },
                    // shadowColor: 'rgba(128, 217, 248, 1)',
                },
                // emphasis: {
                //     borderWidth: 1,
                //     areaColor: {
                //         type: 'linear',
                //         x: 0,
                //         y: 0,
                //         x2: 0,
                //         y2: 1,
                //         colorStops: [{
                //             offset: 0,
                //             color: '#14b0e3' // 0% 处的颜色
                //         }, {
                //             offset: 1,
                //             color: ' #97f9e3' // 100% 处的颜色
                //         }],
                //         globalCoord: false // 缺省为 false
                //     },
                //     shadowBlur: 10,
                //     shadowColor: 'rgba(0,7,79, .8)',
                // }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#333',
                        fontSize: 10
                    },
                    formatter: function(data) {
                        return data.name
                    }
                }
            },
            data: data
        }]
    };
}

function setPie(name, data) {
    return {
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: { show: false }
            }
        },
        // legend: {
        //     icon: 'circle',
        //     bottom: 15,
        //     textStyle: {
        //         fontSize: 14,
        //         color: '#FFFFFF',
        //         fontFamily: '微软雅黑'
        //     }
        // },
        calculable: false,
        avoidLabelOverlap: true,
        color: ['#2258a7', '#2f82c4', '#f75915'],
        series: [{
            name: name,
            type: 'pie',
            tooltip: {
                trigger: 'item',
                // formatter: '{a} <br/>{b} : {c} ({d}%)'
                formatter: '{a} <br/>{b} : {d}%'
            },
            center: ['center', 'center'], //饼中心点位置
            radius: ['35%', '55%'], //饼半径范围
            labelLine: {
                normal: {
                    length: 5, //设置延长线的长度
                    length2: 10, //设置第二段延长线的长度
                    lineStyle: {
                        color: '#0BA1F8'
                    }
                }
            },
            label: {
                normal: {
                    formatter: ' {c|{c}}{dw|%}\n{hr|}\n{b|{b}}', //这里最后另一行设置了一个空数据是为了能让延长线与hr线对接起来
                    padding: [0, -3], //取消hr线跟延长线之间的间隙
                    rich: {
                        c: {
                            color: '#2F82C4',
                            align: 'center',
                            fontSize: 20,
                            lineHeight: 20
                        },
                        dw: {
                            color: '#2F82C4',
                            align: 'center',
                            fontSize: 20,
                            lineHeight: 20
                        },
                        hr: { //设置hr是为了让中间线能够自适应长度
                            borderColor: '#2F82C4', //hr的颜色为auto时候会主动显示颜色的
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0.5
                        },
                        b: {
                            color: '#5D5959',
                            align: 'center',
                            fontSize: 14,
                            lineHeight: 20
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    borderColor: '#FFF'
                },
                emphasis: {
                    barBorderRadius: 5
                }
            },
            data: data
        }]
    };
}