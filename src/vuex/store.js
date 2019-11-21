import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus: "loggedOut",
    matchError: false,
    currentView: "loginPanel",
    user_name: "",
    list_of_newsitems: []
  },
  mutations: {
    setUser(state, id) {
      state.user_id = id;
    },
    setUsername(state, name) {
      state.user_name = name;
    },
    changeView(state, view) {
      state.currentView = view;
    },
    setUserPreferences(state, preferences) {
      // are we using this?
      state.user_preferences = preferences;
    },
    updateNewslist(state, news) {
      state.list_of_newsitems = news;
    },
    updateWeather(state, news) {
      state.list_of_newsitems = news;
    },
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus;
    },
    setMatchError(state, status) {
      state.matchError = status;
    },
  },
  actions: {
    async checkFace(store, image) {
      try {
        // **************************** FAKE DATA *********************************
        // const randomNumber = Math.floor(Math.random() * 10);
        // let response;
        // if (randomNumber < 4) {
        //   response = {
        //    result: true,
        //    data: {
        //      name: 'Naoto',
        //      value: [
        //       {
        //         name:
        //           "Everything Jim Cramer said about the stock market on 'Mad Money,' including trade hits to tech stocks, exec interviews with Salesforce, RH and Square",
        //         url:
        //           "https://www.cnbc.com/2019/11/19/jim-cramer-mad-money-recap-stock-picks-nov-19-2019.html",
        //         image: {
        //           thumbnail: {
        //             contentUrl:
        //               "https://www.bing.com/th?id=ON.ABE5D2E135C5458D06F9F5DDF95AE5AE&pid=News",
        //             width: 700,
        //             height: 466,
        //           },
        //         },
        //         description:
        //           '"If you\'re dumping an ETF, be my guest — those are just moronic amalgamations of stocks slapped together by people who make a living by convincing you that the tech sector is still a real, cohesive thing," he said. "But if you\'re dumping the kind of tech stocks that are working here — especially the better run software-as-a-service names ...',
        //         provider: [
        //           {
        //             "0": {
        //               _type: "Organization",
        //               name: "CNBC",
        //               image: {
        //                 thumbnail: {
        //                   contentUrl:
        //                     "https://www.bing.com/th?id=AR_4efc5b36002beed4d9e08a53512d7e9e&pid=news",
        //                 },
        //               },
        //             },
        //           },
        //         ],
        //         datePublished: "2019-11-20T01:10:00.0000000Z",
        //         category: "ScienceAndTechnology",
        //       },
        //       {
        //         name:
        //           "Big Tech: Arise And Defend Online Bias And Controversial Speech From Aspiring Regulators",
        //         url:
        //           "https://www.forbes.com/sites/waynecrews/2019/11/19/big-tech-arise-and-defend-online-bias-and-controversial-speech-from-aspiring-regulators/",
        //         image: {
        //           thumbnail: {
        //             contentUrl:
        //               "https://www.bing.com/th?id=ON.E4A2A7CAA751DF5F7F3170467FC9B3BC&pid=News",
        //             width: 700,
        //             height: 455,
        //           },
        //         },
        //         description:
        //           'Google again is the subject of a presumably revelatory story about its tweaking search results. That gets a yawn from me. Each tech platform, and those yet to come, must police themselves vigorously. First Amendment and US Constitution text with legal gavel As even the Wall Street Journal analysis notes, "bad actors are increasingly trying to ...',
        //         provider: [
        //           {
        //             "0": {
        //               _type: "Organization",
        //               name: "Forbes",
        //               image: {
        //                 thumbnail: {
        //                   contentUrl:
        //                     "https://www.bing.com/th?id=AR_f798ef715781699feff0f3ea5f101626&pid=news",
        //                 },
        //               },
        //             },
        //           },
        //         ],
        //         datePublished: "2019-11-20T00:15:00.0000000Z",
        //         category: "ScienceAndTechnology",
        //       },
        //       {
        //         name: "Vodafone extends tech partnership with Ryanair",
        //         url:
        //           "https://www.reuters.com/article/us-ryanair-vodafone/vodafone-extends-tech-partnership-with-ryanair-idUSKBN1XU006?il=0",
        //         image: {
        //           thumbnail: {
        //             contentUrl:
        //               "https://www.bing.com/th?id=ON.D45576EF1BA334B8FE437A4E46EE9238&pid=News",
        //             width: 700,
        //             height: 466,
        //           },
        //         },
        //         description:
        //           "LONDON (Reuters) - Vodafone ( VOD.L) has secured a seven-year technology partnership with Ryanair ( RYA.I) to handle services including online booking, passenger boarding and in-flight transactions for the Irish airline in Europe.",
        //         provider: [
        //           {
        //             "0": {
        //               _type: "Organization",
        //               name: "Reuters",
        //               image: {
        //                 thumbnail: {
        //                   contentUrl:
        //                     "https://www.bing.com/th?id=AR_62e71bb461e92ae25d37bed673fc53b9&pid=news",
        //                 },
        //               },
        //             },
        //           },
        //         ],
        //         datePublished: "2019-11-20T00:14:00.0000000Z",
        //       },
        //       {
        //         name:
        //           "Big Tech: Arise And Defend Online Bias And Controversial Speech From Aspiring Regulators",
        //         url:
        //           "https://www.forbes.com/sites/waynecrews/2019/11/19/big-tech-arise-and-defend-online-bias-and-controversial-speech-from-aspiring-regulators/",
        //         image: {
        //           thumbnail: {
        //             contentUrl:
        //               "https://www.bing.com/th?id=ON.E4A2A7CAA751DF5F7F3170467FC9B3BC&pid=News",
        //             width: 700,
        //             height: 455,
        //           },
        //         },
        //         description:
        //           'Google again is the subject of a presumably revelatory story about its tweaking search results. That gets a yawn from me. Each tech platform, and those yet to come, must police themselves vigorously. First Amendment and US Constitution text with legal gavel As even the Wall Street Journal analysis notes, "bad actors are increasingly trying to ...',
        //         provider: [
        //           {
        //             "0": {
        //               _type: "Organization",
        //               name: "Forbes",
        //               image: {
        //                 thumbnail: {
        //                   contentUrl:
        //                     "https://www.bing.com/th?id=AR_f798ef715781699feff0f3ea5f101626&pid=news",
        //                 },
        //               },
        //             },
        //           },
        //         ],
        //         datePublished: "2019-11-20T00:15:00.0000000Z",
        //         category: "ScienceAndTechnology",
        //       },
        //       {
        //         name: "Vodafone extends tech partnership with Ryanair",
        //         url:
        //           "https://www.reuters.com/article/us-ryanair-vodafone/vodafone-extends-tech-partnership-with-ryanair-idUSKBN1XU006?il=0",
        //         image: {
        //           thumbnail: {
        //             contentUrl:
        //               "https://www.bing.com/th?id=ON.D45576EF1BA334B8FE437A4E46EE9238&pid=News",
        //             width: 700,
        //             height: 466,
        //           },
        //         },
        //         description:
        //           "LONDON (Reuters) - Vodafone ( VOD.L) has secured a seven-year technology partnership with Ryanair ( RYA.I) to handle services including online booking, passenger boarding and in-flight transactions for the Irish airline in Europe.",
        //         provider: [
        //           {
        //             "0": {
        //               _type: "Organization",
        //               name: "Reuters",
        //               image: {
        //                 thumbnail: {
        //                   contentUrl:
        //                     "https://www.bing.com/th?id=AR_62e71bb461e92ae25d37bed673fc53b9&pid=news",
        //                 },
        //               },
        //             },
        //           },
        //         ],
        //         datePublished: "2019-11-20T00:14:00.0000000Z",
        //       },
        //     ]
        //    }
        //   }
        // } else if (randomNumber < 7) {
        //   response = {
        //     result: true,
        //     data: {
        //       name: "David",
        //       value: [
        //         {
        //           name:
        //             "David News - Everything Jim Cramer said about the stock market on 'Mad Money,' including trade hits to tech stocks, exec interviews with Salesforce, RH and Square",
        //           url:
        //             "https://www.cnbc.com/2019/11/19/jim-cramer-mad-money-recap-stock-picks-nov-19-2019.html",
        //           image: {
        //             thumbnail: {
        //               contentUrl:
        //                 "https://www.bing.com/th?id=ON.ABE5D2E135C5458D06F9F5DDF95AE5AE&pid=News",
        //               width: 700,
        //               height: 466,
        //             },
        //           },
        //           description:
        //             '"If you\'re dumping an ETF, be my guest — those are just moronic amalgamations of stocks slapped together by people who make a living by convincing you that the tech sector is still a real, cohesive thing," he said. "But if you\'re dumping the kind of tech stocks that are working here — especially the better run software-as-a-service names ...',
        //           provider: [
        //             {
        //               "0": {
        //                 _type: "Organization",
        //                 name: "CNBC",
        //                 image: {
        //                   thumbnail: {
        //                     contentUrl:
        //                       "https://www.bing.com/th?id=AR_4efc5b36002beed4d9e08a53512d7e9e&pid=news",
        //                   },
        //                 },
        //               },
        //             },
        //           ],
        //           datePublished: "2019-11-20T01:10:00.0000000Z",
        //           category: "ScienceAndTechnology",
        //         },
        //         {
        //           name:
        //             "Big Tech: Arise And Defend Online Bias And Controversial Speech From Aspiring Regulators",
        //           url:
        //             "https://www.forbes.com/sites/waynecrews/2019/11/19/big-tech-arise-and-defend-online-bias-and-controversial-speech-from-aspiring-regulators/",
        //           image: {
        //             thumbnail: {
        //               contentUrl:
        //                 "https://www.bing.com/th?id=ON.E4A2A7CAA751DF5F7F3170467FC9B3BC&pid=News",
        //               width: 700,
        //               height: 455,
        //             },
        //           },
        //           description:
        //             'Google again is the subject of a presumably revelatory story about its tweaking search results. That gets a yawn from me. Each tech platform, and those yet to come, must police themselves vigorously. First Amendment and US Constitution text with legal gavel As even the Wall Street Journal analysis notes, "bad actors are increasingly trying to ...',
        //           provider: [
        //             {
        //               "0": {
        //                 _type: "Organization",
        //                 name: "Forbes",
        //                 image: {
        //                   thumbnail: {
        //                     contentUrl:
        //                       "https://www.bing.com/th?id=AR_f798ef715781699feff0f3ea5f101626&pid=news",
        //                   },
        //                 },
        //               },
        //             },
        //           ],
        //           datePublished: "2019-11-20T00:15:00.0000000Z",
        //           category: "ScienceAndTechnology",
        //         },
        //         {
        //           name: "Vodafone extends tech partnership with Ryanair",
        //           url:
        //             "https://www.reuters.com/article/us-ryanair-vodafone/vodafone-extends-tech-partnership-with-ryanair-idUSKBN1XU006?il=0",
        //           image: {
        //             thumbnail: {
        //               contentUrl:
        //                 "https://www.bing.com/th?id=ON.D45576EF1BA334B8FE437A4E46EE9238&pid=News",
        //               width: 700,
        //               height: 466,
        //             },
        //           },
        //           description:
        //             "LONDON (Reuters) - Vodafone ( VOD.L) has secured a seven-year technology partnership with Ryanair ( RYA.I) to handle services including online booking, passenger boarding and in-flight transactions for the Irish airline in Europe.",
        //           provider: [
        //             {
        //               "0": {
        //                 _type: "Organization",
        //                 name: "Reuters",
        //                 image: {
        //                   thumbnail: {
        //                     contentUrl:
        //                       "https://www.bing.com/th?id=AR_62e71bb461e92ae25d37bed673fc53b9&pid=news",
        //                   },
        //                 },
        //               },
        //             },
        //           ],
        //           datePublished: "2019-11-20T00:14:00.0000000Z",
        //         },
        //         {
        //           name:
        //             "David News - Big Tech: Arise And Defend Online Bias And Controversial Speech From Aspiring Regulators",
        //           url:
        //             "https://www.forbes.com/sites/waynecrews/2019/11/19/big-tech-arise-and-defend-online-bias-and-controversial-speech-from-aspiring-regulators/",
        //           image: {
        //             thumbnail: {
        //               contentUrl:
        //                 "https://www.bing.com/th?id=ON.E4A2A7CAA751DF5F7F3170467FC9B3BC&pid=News",
        //               width: 700,
        //               height: 455,
        //             },
        //           },
        //           description:
        //             'Google again is the subject of a presumably revelatory story about its tweaking search results. That gets a yawn from me. Each tech platform, and those yet to come, must police themselves vigorously. First Amendment and US Constitution text with legal gavel As even the Wall Street Journal analysis notes, "bad actors are increasingly trying to ...',
        //           provider: [
        //             {
        //               "0": {
        //                 _type: "Organization",
        //                 name: "Forbes",
        //                 image: {
        //                   thumbnail: {
        //                     contentUrl:
        //                       "https://www.bing.com/th?id=AR_f798ef715781699feff0f3ea5f101626&pid=news",
        //                   },
        //                 },
        //               },
        //             },
        //           ],
        //           datePublished: "2019-11-20T00:15:00.0000000Z",
        //           category: "ScienceAndTechnology",
        //         }
        //       ]
        //     }
        //    }
        // } else {
        //   response = {
        //     result: false
        //     }
        //   }
        // **************************** FAKE DATA *********************************
        // wait 3 seconds //
        // const wait = (ms) => {
        //   var d = new Date();
        //   var d2 = null;
        //   do {
        //     d2 = new Date();
        //   } while (d2 - d < ms);
        // };
        // wait(3000);

        const response= await axios.post("/api/data", {
	         "body": image
        });

        if (response.result === true) {
          store.commit("setUsername", response.data.name);
          store.commit("updateNewslist", response.data.value);
          store.commit("setLoginStatus", "loggedIn");
          store.commit("setMatchError", false);
          store.commit("changeView", "resultsPanel");
        } else {
          store.commit("setMatchError", true);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    test(state) {
      return state.test;
    },
  },
});
