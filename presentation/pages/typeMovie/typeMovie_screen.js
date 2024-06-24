import AllItemMovie from "../../components/allItemMovie/allItemMovie";


const TypeMovieScreen = ({route}) => {
    const {type} = route.params;
    return <AllItemMovie type={type} />
}
export default TypeMovieScreen;