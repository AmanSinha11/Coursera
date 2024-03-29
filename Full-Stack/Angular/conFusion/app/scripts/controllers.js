/**
 * Created by tingyuanzhang on 07／31／2017.
 */
'use strict';

angular.module('confusionApp')

    .controller('MenuController', ['$scope','menuFactory', function($scope, menuFactory) {

        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;

        $scope.dishes= menuFactory.getDishes();

        $scope.select = function(setTab) {
            $scope.tab = setTab;

            if (setTab === 2) {
                $scope.filtText = "appetizer";
            }
            else if (setTab === 3) {
                $scope.filtText = "mains";
            }
            else if (setTab === 4) {
                $scope.filtText = "dessert";
            }
            else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
    }]);

    /*.controller('ContactController', ['$scope', function($scope) {

        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

        $scope.channels = channels;
        $scope.invalidChannelSelection = false;

    }])

    .controller('FeedbackController', ['$scope', function($scope) {

        $scope.sendFeedback = function() {

            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                $scope.feedback.mychannel="";
                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])

    .controller('DishDetailController', ['$scope', function($scope) {

        var dish = {
            name:'Uthapizza',
            image: 'images/uthapizza.png',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
            comments: [
                {
                    rating:5,
                    comment:"Imagine all the eatables, living in conFusion!",
                    author:"John Lemon",
                    date:"2012-10-16T17:57:28.556094Z"
                },
                {
                    rating:4,
                    comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                    author:"Paul McVites",
                    date:"2014-09-05T17:57:28.556094Z"
                },
                {
                    rating:3,
                    comment:"Eat it, just eat it!",
                    author:"Michael Jaikishan",
                    date:"2015-02-13T17:57:28.556094Z"
                },
                {
                    rating:4,
                    comment:"Ultimate, Reaching for the stars!",
                    author:"Ringo Starry",
                    date:"2013-12-02T17:57:28.556094Z"
                },
                {
                    rating:2,
                    comment:"It's your birthday, we're gonna party!",
                    author:"25 Cent",
                    date:"2011-12-02T17:57:28.556094Z"
                }
            ]
        };
        $scope.dish = dish;
    }])

    .controller('DishCommentController', ['$scope', function($scope) {

        //Step 1: Create a JavaScript object to hold the comment from the form
        var comment = {
            rating: 5,
            comment: '',
            author: '',
            date: ""
        };

        $scope.comment = comment;

        $scope.submitComment = function () {

            //Step 2: Get current date
            $scope.comment.date = new Date().toISOString();

            // Step 3: Push the comment into the dish's comment array
            $scope.dish.comments.push($scope.comment);
            // console.log($scope.dish.comments);

            //Step 4: reset the form to pristine state
            $scope.commentForm.$setPristine();

            //Step 5: reset JavaScript object that holds a comment
            $scope.comment = {
                rating: 5,
                comment: '',
                author: '',
                date: ""
            };

        };
    }]);*/