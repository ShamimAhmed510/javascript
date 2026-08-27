const user = {
  profile: {

  },
};

const githubaccount = user?.profile?.social?.github ?? "No Acooount";
console.log(githubaccount)