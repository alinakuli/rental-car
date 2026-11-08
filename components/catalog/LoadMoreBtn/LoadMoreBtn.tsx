import css from "./LoadMoreBtn.module.css";

type Props = {
    onClick: () => void;
    loading?: boolean;
};

export default function LoadMoreBtn({ onClick, loading = false }: Props) {
    return (
        <button
            type="button"
            className={css.btn}
            onClick={onClick}
            disabled={loading}
        >
            {loading ? "Loading..." : "Load more"}
        </button>
    )
}