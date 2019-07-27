'use strict';

/**
 * @ngdoc function
 * @name simplicityExplainedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simplicityExplainedApp
 */
angular.module('simplicityExplainedApp')
  .controller('MainCtrl', function($scope, $location) {
    $scope.quote = quotes[Math.floor(Math.random()*quotes.length)];
    $scope.concepts = concepts;
    $scope.currentConcept = null;
    $scope.openConcept = function(c) {
      $location.path('concept/' + c.name);
    };
  });

angular.module('simplicityExplainedApp')
  .controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

var quotes = [
  { 
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  }, {
    text: "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
    author: "Martin H. Fischer"
  }, {
    text: "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.",
    author: "Steve Jobs"
  }, {
    text: "Everything should be made as simple as possible, but not simpler.",
    author: "Albert Einstein"
  }, {
    text: "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein"
  }, {
    text: "Simplicity is the essence of happiness.",
    author: "Cedric Bledsoe"
  }, {
    text: "Simplicity is the key to excellence.",
    author: "Dieter Rams"
  }, {
    text: "Minimize complexity. The simpler the product, the more likely you are to actually ship it, and the more likely you are to fix problems quickly.",
    author: "Slava Akhmechet @ RethinkDB"
  }, {
    text: "Human nature has a tendency to admire complexity but reward simplicity.",
    author: "Ben Huh @ The Cheezburger Network"
  }, {
    text: "It’s very interesting about simplicity. No one will argue with it. Everyone intuitively gets it. But everyone wants to know, ’How do we do it?’",
    author: "Mark McCormick @ Wells Fargo"
  }
];

var concepts = [
  {
    name: "Less is more",
    group: "principles",
    icon: "images/less-is-more.svg",
    description: "\"The more stuff in it, the busier the work of art, the worse it is. More is less. Less is more.\" -- Ad Reinhardt",
    bullets: [
      {
        text: "Don't be afraid to let go",
        link: null,
      },
      {
        text: "Don't overwhelm",
        link: null,
      },
      {
        text: "Reduce options",
        link: null,
      },
      {
        text: "Design for minimum amount of conscious effort",
        link: null,
      },
      {
        text: "Pareto principle",
        link: "https://en.wikipedia.org/wiki/Pareto_principle",
      },
      {
        text: "Limiting the actions that can be performed to simplify use and prevent error",
        link: null,
      },
      {
        text: "Save time",
        link: null,
      },
    ]
  },
  {
    name: "Gall's Law",
    group: "principles",
    icon: "images/galls-law.svg",
    description: "A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system."
  },
  {
    name: "Occam's razor",
    group: "principles",
    icon: "images/occams-razor.svg",
    description: "Simpler solutions are more likely to be correct than complex ones."
  },
  {
    name: "Bonini's paradox",
    group: "principles",
    icon: "images/boninis-paradox.svg",
    description: "As a model of a complex system becomes more complete, it becomes less understandable. Alternatively, as a model grows more realistic, it also becomes just as difficult to understand as the real-world processes it represents."
  },
  {
    name: "Myths",
    group: "principles",
    icon: "images/myths.svg",
    description: "",
    bullets: [
      {
        text: "People are rational",
        link: "https://uxmyths.com/post/2607991907/myth-29-people-are-rational",
      },
      {
        text: "People read the documentation",
        link: null,
      },
      {
        text: "\"I am not biased\"",
        link: "https://en.wikipedia.org/wiki/List_of_cognitive_biases",
      },
      {
        text: "All pages should be accessible in 3 clicks",
        link: "https://uxmyths.com/post/654026581/myth-all-pages-should-be-accessible-in-3-clicks",
      },
      {
        text: "Illusion of Simplicity",
        link: "https://uxmanager.net/singleheuristic/3094",
      },
      {
        text: "We all learn the same way",
        link: null,
      },
      {
        text: "More choices/features results in higher satisfaction",
        link: null
      },
      {
        text: "Fashion can trump usability",
        link: null,
      },
      {
        text: "It has to be original",
        link: null,
      },
    ]
  },
  {
    name: "Contextualize",
    group: "discover",
    icon: "images/context.svg",
    description: "Lorem ipsump dolor sit",
    bullets: [
      {
        text: "Framing: A method of presenting choices in specific ways to influence decision making and judgement",
        link: null
      },
      {
        text: "Priming: Activating specific concepts in memory to influence subsequent thoughts and behaviours",
        link: null,
      },
    ]
  },
  {
    name: "Cue",
    group: "discover",
    icon: "images/cue.svg",
    description: "Lorem ipsump dolor sit"
  },
  {
    name: "Reaction",
    group: "discover",
    icon: "images/reaction.svg",
    description: "Lorem ipsump dolor sit"
  },
  {
    name: "Evaluation",
    group: "discover",
    icon: "images/evaluation.svg",
    description: "Lorem ipsump dolor sit"
  },
  {
    name: "Ability",
    group: "discover",
    icon: "images/ability.svg",
    description: "Lorem ipsump dolor sit"
  },
  {
    name: "Timing",
    group: "discover",
    icon: "images/timing.svg",
    description: "Lorem ipsump dolor sit"
  },
  {
    name: "Information",
    group: "learn",
    icon: "images/information.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Navigation",
    group: "learn",
    icon: "images/navigation.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Interaction",
    group: "learn",
    icon: "images/interaction.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Aesthetics",
    group: "learn",
    icon: "images/aesthetics.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Start with WHY",
    group: "act",
    icon: "images/why.svg",
    description: "Lorem ipsump dolor sit"
  },
  {
    name: "Clear CTA",
    group: "act",
    icon: "images/cta.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Validate the user",
    group: "act",
    icon: "images/validate.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Give before you receive",
    group: "act",
    icon: "images/give.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Be positive",
    group: "act",
    icon: "images/positive.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Elephant methaphor",
    group: "act",
    icon: "images/elephant.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Copywriting",
    group: "act",
    icon: "images/copywriting.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "FOMO",
    group: "act",
    icon: "images/fomo.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Repetition",
    group: "remember",
    icon: "images/repeat.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Storytelling",
    group: "remember",
    icon: "images/storytelling.svg",
    description: "Lorem ipsump dolor sit"
  },
  {
    name: "Mnemonics",
    group: "remember",
    icon: "images/palace.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Picture superiority",
    group: "remember",
    icon: "images/picture.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Miller's Law",
    group: "remember",
    icon: "images/seven.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "von Restorff Effect",
    group: "remember",
    icon: "images/uncommon.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Zeigamiz Effect",
    group: "remember",
    icon: "images/incomplete.svg",
    description: "Lorem ipsump dolor sit"
  },  
  {
    name: "Habit forming",
    group: "remember",
    icon: "images/habit.svg",
    description: "Lorem ipsump dolor sit"
  },  
];