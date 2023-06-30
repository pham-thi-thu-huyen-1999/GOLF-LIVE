import { Container } from "@Styles/container";
import Infors from "./TourList/Infors";
import MastheadTourDetail from "./MastheadTourDetail";
import TourList from "./TourList";
import { StyleToursDetail } from "./style";

const RankingDetail = ({ findTournamentRankingByName, slug }) => {
  const { data, title, tournament_name, tournament_fullname, dates,
    prize_money, par, tournament_status, rankings } = findTournamentRankingByName;
  return <StyleToursDetail>
    <Container>
      <MastheadTourDetail title={tournament_name} />
      <Infors fullName={tournament_fullname} dates={dates} prizeMoney={prize_money} par={par} type="" tournament_status={tournament_status} />
      <TourList data={data} title={title} list={rankings}
        tournament_fullname={tournament_fullname}
        slug={slug}
      />
    </Container>
  </StyleToursDetail>
}
export default RankingDetail
