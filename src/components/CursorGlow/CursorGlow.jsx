import { useEffect, useRef } from 'react';
import './CursorGlow.css';

export default function CursorGlow() {
    const glowRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const glowPos = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        function animateGlow() {
            glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.08;
            glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.08;
            if (glowRef.current) {
                glowRef.current.style.left = glowPos.current.x + 'px';
                glowRef.current.style.top = glowPos.current.y + 'px';
            }
            animationRef.current = requestAnimationFrame(animateGlow);
        }

        document.addEventListener('mousemove', handleMouseMove);
        animateGlow();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return <div className="cursor-glow" ref={glowRef} />;
}
