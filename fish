/* Muskie animation */
.muskie {
    position: fixed;
    bottom: 20px;
    left: -200px;
    z-index: 100;
    animation: swim 10s linear infinite;
}

@keyframes swim {
    0% {
        left: -200px;
    }
    50% {
        left: 50%;
        transform: translateX(-50%) translateY(0);
    }
    100% {
        left: 100%;
    }
}
