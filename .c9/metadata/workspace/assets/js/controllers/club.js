{"changed":true,"filter":false,"title":"club.js","tooltip":"/assets/js/controllers/club.js","value":"myApp.controller(\"clubCtrl\", function($scope, Club) {\n    $scope.clubs = Club.getClubs();\n    $scope.addClub = function(name) {\n        Club.addClub(\n            {\n                name: name,\n            }\n        );\n        delete $scope.name\n    };\n    $scope.updateClub = function (id) {\n        Club.updateClub(id);\n    };\n\n    $scope.removeClub = function (id) {\n        Club.removeClub(id);\n    };\n    \n    $scope.currentClub = null;\n    $scope.hideAllForms = false;\n    \n    \n    function hideForms(){\n        $scope.hideAllForms = true;\n    }\n    \n    $scope.hideForms = hideForms;\n    \n    \n    function isCurrentClub(club) {\n        return $scope.currentClub !== null && club.name === $scope.currentClub.name;\n    }\n    \n    function setCurrentClub(club) {\n        $scope.currentClub = club;\n    }\n    \n    $scope.isCurrentClub = isCurrentClub;\n    $scope.setCurrentClub = setCurrentClub;\n    \n});","undoManager":{"mark":96,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":34},"end":{"row":23,"column":35},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":5},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":4},"end":{"row":26,"column":0},"action":"insert","lines":["",""]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":26,"column":6},"action":"remove","lines":["$s"]},{"start":{"row":26,"column":4},"end":{"row":26,"column":10},"action":"insert","lines":["$scope"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":11},"end":{"row":26,"column":20},"action":"insert","lines":["hideForms"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":23},"end":{"row":26,"column":32},"action":"insert","lines":["hideForms"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":32},"end":{"row":26,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":9},"end":{"row":35,"column":11},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":10},"end":{"row":35,"column":12},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":["#"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":12},"end":{"row":35,"column":24},"action":"insert","lines":["cancelPlayer"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":26},"end":{"row":35,"column":27},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":27},"end":{"row":35,"column":28},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":28},"end":{"row":35,"column":29},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":27},"end":{"row":35,"column":29},"action":"remove","lines":["cl"]},{"start":{"row":35,"column":27},"end":{"row":35,"column":34},"action":"insert","lines":["click()"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":33},"end":{"row":35,"column":34},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":33},"end":{"row":35,"column":34},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":34},"end":{"row":35,"column":35},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":6},"end":{"row":35,"column":35},"action":"remove","lines":["  $(\"#cancelPlayer\").click();"]},{"start":{"row":35,"column":6},"end":{"row":35,"column":32},"action":"insert","lines":["$('#cancelPlayer').click()"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":32},"end":{"row":35,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"remove","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"remove","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"remove","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":19},"end":{"row":35,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":20},"end":{"row":35,"column":39},"action":"insert","lines":[" $('#cancelPlayer')"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":6},"end":{"row":36,"column":7},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":7},"end":{"row":36,"column":8},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":41},"end":{"row":36,"column":0},"action":"insert","lines":["",""]},{"start":{"row":36,"column":0},"end":{"row":36,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":48},"action":"insert","lines":["var el = document.getElementById(\"foo\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":48},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":42},"end":{"row":36,"column":45},"action":"remove","lines":["foo"]},{"start":{"row":36,"column":42},"end":{"row":36,"column":54},"action":"insert","lines":["cancelPlayer"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":57},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":41},"action":"remove","lines":["console.log( $('#cancelPlayer'));"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":35,"column":8},"action":"remove","lines":["","        "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":9},"end":{"row":36,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":19},"end":{"row":36,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":24},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":11},"end":{"row":37,"column":12},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":12},"end":{"row":37,"column":13},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":16},"end":{"row":37,"column":18},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":18},"end":{"row":37,"column":19},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":8},"end":{"row":38,"column":25},"action":"insert","lines":[" console.log(el);"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":39,"column":35},"action":"remove","lines":["        console.log(el);","        el.click();","         console.log(el);","      //$('#cancelPlayer').click();"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":6},"end":{"row":35,"column":57},"action":"remove","lines":["  var el = document.getElementById(\"cancelPlayer\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":35,"column":6},"action":"remove","lines":["","      "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":240,"scrollleft":0,"selection":{"start":{"row":40,"column":3},"end":{"row":40,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424640221000}