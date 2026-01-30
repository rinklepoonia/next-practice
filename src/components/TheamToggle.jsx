
// const searchParams = useSearchParams();
// const router = useRouter();
// const perPage = 6;

// const initialPage = parseInt(searchParams.get("page") || "1", 10);
// const [page, setPage] = useState(initialPage);

// const updateURL = (newPage: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", newPage.toString());
//     router.replace(?${ params.toString() });
// };

// const displayedCards = cardData.slice(0, page * perPage);
// const moreData = cardData.slice(page * perPage, (page + 1) * perPage);

// const loadMoreCards = () => {
//     const newPage = page + 1;
//     setPage(newPage);
//     updateURL(newPage);
// };

// const seeLessCards = () => {
//     const newPage = Math.max(page - 1, 1);
//     setPage(newPage);
//     updateURL(newPage);
// };

// useEffect(() => {
//     updateURL(page);
// }, [page]);