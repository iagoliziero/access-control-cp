export interface IButton {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type: "submit" | "reset" | "button" | undefined
}