import { Container, ContainerChildren } from "@Styles/container";
import Infors from "./TourList/Infors";
import MastheadTourDetail from "./MastheadTourDetail";
import TourList from "./TourList";
import { StyleToursDetail } from "./style"

const TourDetail = ({ findTournamentDetailByName, slug, itemFavs, onChangeLocalStorage, isCurrent }) => {
  const { tournament_name, tournament_fullname, dates, prize_money, par, results, tournament_status } = findTournamentDetailByName
  return <StyleToursDetail>
    <Container>
      <MastheadTourDetail title={tournament_name} />
      <Infors fullName={tournament_fullname} dates={dates} prizeMoney={prize_money} par={par} tournament_status={tournament_status} />
      <TourList data={findTournamentDetailByName} list={results}
        itemFavs={itemFavs}
        isCurrent={isCurrent}
        onChangeLocalStorage={onChangeLocalStorage}
        slug={slug}
      />
    </Container>
  </StyleToursDetail>
}
export default TourDetail
