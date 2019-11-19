import React from "react";

import ArticleHeader from "./ArticleHeader";
import ArticleList from "./ArticleList";
import TrendingTopics from "./TrendingTopics";
import TopUsers from "./TopUsers";

class Topics extends React.Component {
  state = {
    topic: "Football",
    articles: [
      {
        article_id: 16,
        title: "History of FC Barcelona",
        body:
          "The history of Futbol Club Barcelona goes from the football club's founding in 1899 and up to current time. FC Barcelona, also known simply as Barcelona and familiarly as Barça, is based in Barcelona, Catalonia, Spain. The team was founded in 1899 by a group of Swiss, English and Spanish footballers led by Joan Gamper. The club played amateur football until 1910 in various regional competitions. In 1910, the club participated in their first of many European competitions, and has since amassed ten UEFA trophies and a sextuple. In 1928, Barcelona co-founded La Liga, the top-tier in Spanish football, along with a string of other clubs. As of 2016, Barcelona has never been relegated from La Liga, a record they share with Athletic Bilbao and arch-rival Real Madrid. The history of Barcelona has often been politically. Though it is a club created and run by foreigners, Barcelona gradually became a club associated with Catalan values. In Spain's transition to autocracy in 1925, Catalonia became increasingly hostile towards the central government in Madrid. The hostility enhanced Barcelona's image as a focal point for Catalonism, and when Francisco Franco banned the use of the Catalan language, the stadium of Barcelona became one of the few places the people could express their dissatisfaction. The Spanish transition to democracy in 1978 has not dampened the club's image of Catalan pride. In the 2000s – a period of sporting success in the club and an increased focus on Catalan players – club officials have openly called for Catalonia to become an independent state.",
        votes: 0,
        topic: "football",
        author: "weegembump",
        created_at: "2018-02-17T20:38:43.448Z",
        comment_count: "16"
      },
      {
        article_id: 20,
        title: "History of Football",
        body:
          "It may come as a surprise to many, but football has a long and interesting history; sources suggest that the sport was first introduced in England as early as 1170 when an account describes youths going to the fields for a ‘game of ball’. Aspects of the game can even be traced back to as early as the second and third century BC in China. Sources taken from military manuals at the time describe an exercise called Tsu’ Chu, in which opponents used a leather ball filled with feathers and hair. The aim was to get the ball into a small net fixed on to bamboo canes while also defending themselves from attacks. Variations of the game are also documented in Egyptian and Greek society, proving that the sport has a long tradition throughout history.",
        votes: 0,
        topic: "football",
        author: "tickle122",
        created_at: "2017-10-10T08:18:16.497Z",
        comment_count: "5"
      },
      {
        article_id: 19,
        title: "Who are the most followed clubs and players on Instagram?",
        body:
          "Manchester United are the UK's most popular club on Instagram, with over 14m people following their account for their latest photos and videos. United's total number of followers is over six million more than second-placed Arsenal (8.1m), while Chelsea are third on the list with 7.7m followers, according to data exclusively compiled for Sky Sports. Instagram has a 500m-strong community, with one in three people on the social media site (around 165m) following a sports account.",
        votes: 0,
        topic: "football",
        author: "jessjelly",
        created_at: "2017-07-26T16:49:01.355Z",
        comment_count: "13"
      },
      {
        article_id: 24,
        title: "Game of talents: management lessons from top football coaches",
        body:
          "At lunchtime on the day of the Champions League final in 2012, Chelsea’s manager Roberto Di Matteo had selected 10 of his 11 players. He just didn’t know who to play in left midfield. The player would have to combat Bayern Munich’s brilliant Arjen Robben and Philipp Lahm. Going into the last team meeting, Di Matteo had a private chat with his left-back, Ashley Cole. He outlined the situation, then asked Cole who he would play at left-midfield. Instead of naming a seasoned star, Cole said: “Ryan Bertrand.” The 22-year-old reserve Bertrand had never played in the Champions League, let alone in club football’s biggest game. “Why?” asked Di Matteo, surprised. “I trust him,” replied Cole. Bertrand played well, and Chelsea beat Bayern on penalties. In part, this was a victory for talent management. Di Matteo had put aside his ego, and let trust between two players drive the decision. Talent management has been a business obsession at least since 1997, when the consultancy McKinsey identified a “war for talent”. The most visible battleground of this “war” is team sport. Football, in particular, is “the quintessential model for modern-day talent-dependent business”, writes Chris Brady, professor at Salford Business School. Big football clubs pay more than half their revenues to between 3 and 7 per cent of their workforce: the players. These young men are rich, multinational, mobile, often equipped with large egos and therefore hard to manage. Football managers are, above all, talent managers.",
        votes: 0,
        topic: "football",
        author: "jessjelly",
        created_at: "2017-04-01T10:54:48.304Z",
        comment_count: "5"
      }
    ]
  };
  render() {
    return (
      <div className="article-page">
        <ArticleHeader title={this.state.topic} />
        <div id="item2">
          <ArticleList />
        </div>
        <div id="item3">
          <TrendingTopics />
        </div>
        <div id="item4">
          <TopUsers />
        </div>
      </div>
    );
  }
}

export default Topics;
