const app = angular.module('myLifeApp', []);

app.controller('PicController', ['$scope', function($scope){
  let self = this;
  console.log('Running Angularjs');

  self.title = 'Angular Life';
  self.groupingArray = [
      {
          name: 'Graduation',
          photo: './images/MSUM_Grad.jpg',
          likes: 0,
          imageText: 'Graduation with my best friend. He\'s in bangladesh now, but we still talk often.'
      },
      {
          name: 'BOLC Squad',
          photo: './images/Dinner_Friends.jpg',
          likes: 0,
          imageText: 'Squad from BOLC. We were celebrating our completion of the course with before we all went our separate ways.'
      },
      {
          name: 'Promdress Rugby',
          photo: './images/Rugby_Dress.jpg',
          likes: 0,
          imageText: 'Women\'s rugby tournament hosted at MSUM, the men\'s teams in the area play during the douwn times in prom dresses.'
      },
      {
          name: 'First Rugby Tournament',
          photo: './images/Stupid_Hair.jpg',
          likes: 0,
          imageText: 'Ya, it\'s "hazing", big deal. All the rookies took a knee the day before the tournament and let the senior players shave their heads. There were some pretty good ones; I have a mohawk that turns into a mullet in the back.'
      },
      {
          name: 'Model United Nations',
          photo: './images/Water_for_Castro.jpg',
          likes: 0,
          imageText: 'I represented Cuba on the Economic and finance committee for the region\'s Model United Nations. I was pretty proud of myself when I got America voted out of the room with the slogan "Water for Castro" as opposition to the Cuban embargo.'
      },
      {
          name: 'Prime Digital Academy',
          photo: './images/Gacrux_Class.jpg',
          likes: 0,
          imageText: 'A new chapter and something I\'m proud to be a part of. A little sacrifice for a better future.'
      }
  ];

  $scope.plusOne = function(i){
    self.groupingArray[i].likes += 1;
  }
}])