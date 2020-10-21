function canVote(age) {
  return age >= 18;
}

function func() {
  let voterAges = [24, 33, 16, 40];
  var filtered = voterAges.filter(canVote);
  console.log(filtered);
}

// func() --> voterAge = 24 --> filter() --> canVote(24) --> 24 > 18 --> 24
// func() --> voterAge = 33 --> filter() --> canVote(33) --> 33 > 18 --> 33
// func() --> voterAge = 16 --> filter() --> canVote(24) --> 26 < 18 --> X
// func() --> voterAge = 40 --> filter() --> canVote(40) --> 40 > 18 --> 40

func();
