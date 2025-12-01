'use client'

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, PanInfo } from 'framer-motion';

interface Card {
  id: number;
  src: string;
  zIndex: number;
}

interface ImgStackProps {
  images: string[];
}

export default function ImgStack({ images }: ImgStackProps) {
    const router = useRouter();
    const [cards, setCards] = useState<Card[]>(
        images.map((src, index) => ({
            id: index,
            src: src,
            zIndex: 50 - (index * 10)
        }))
    );
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const minDragDistance: number = 20; // Lower threshold for mobile

    const getCardStyles = (index: number) => {
        const baseRotation = 2;
        const rotationIncrement = 2.5;
        const offsetIncrement = -8; // Smaller offset for mobile
        const verticalOffset = -6;

        return {
            x: index * offsetIncrement,
            y: index * verticalOffset,
            rotate: index === 0 ? 0 : -(baseRotation + (index * rotationIncrement)),
            scale: 1,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        };
    };

    const handleDragStart = (_: any, info: PanInfo) => {
        dragStartPos.current = { x: info.point.x, y: info.point.y };
        setIsDragging(true);
    };

    const handleCardClick = () => {
        // Only navigate if we weren't dragging
        if (!isDragging) {
            router.push('/projects');
        }
    };

    const cycleCards = () => {
        if (isAnimating) return;
        
        setIsAnimating(true);

        // Move top card to back and reassign z-index values
        setCards(prevCards => {
            const newCards = [...prevCards];
            const cardToMove = newCards.shift()!;
            newCards.push(cardToMove);

            return newCards.map((card, index) => ({
                ...card,
                zIndex: 50 - (index * 10)
            }));
        });

        // Quick reset to allow rapid swiping
        setTimeout(() => {
            setIsAnimating(false);
        }, 200);
    };

    const handleDragEnd = (_: any, info: PanInfo) => {
        const dragDistance = Math.sqrt(
            Math.pow(info.point.x - dragStartPos.current.x, 2) +
            Math.pow(info.point.y - dragStartPos.current.y, 2)
        );

        if (dragDistance >= minDragDistance) {
            cycleCards();
        }

        // Reset dragging state after a brief delay to prevent click from firing
        setTimeout(() => {
            setIsDragging(false);
        }, 150);
    };

    return (
        <div className="relative flex items-center justify-center w-full h-full touch-none">
            {cards.map((card: Card, index: number) => {
                const isTopCard = index === 0;
                const cardStyles = getCardStyles(index);
                // Top card is always draggable when not animating
                const canDrag = isTopCard && !isAnimating;

                return (
                    <motion.div
                        key={card.id}
                        className="absolute w-48 xs:w-52 sm:w-60 md:w-68 lg:w-72 origin-bottom-center overflow-hidden rounded-xl shadow-2xl bg-gray-900 cursor-pointer active:cursor-grabbing border border-gray-700 touch-none"
                        style={{
                            zIndex: card.zIndex,
                            aspectRatio: '5/7'
                        }}
                        initial={false}
                        animate={cardStyles}
                        drag={canDrag}
                        dragElastic={0.2}
                        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                        dragSnapToOrigin={true}
                        dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
                        onDragStart={isTopCard ? handleDragStart : undefined}
                        onDragEnd={isTopCard ? handleDragEnd : undefined}
                        onTap={handleCardClick}
                        whileHover={isTopCard && !isAnimating ? {
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        } : {}}
                        whileTap={!isDragging ? { scale: 0.98 } : {}}
                        whileDrag={{
                            scale: 1.05,
                            rotate: 0,
                            zIndex: 100,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                            cursor: "grabbing",
                            transition: { duration: 0.1 }
                        }}
                    >
                        <Image
                            src={card.src}
                            alt={`Card ${card.id + 1}`}
                            fill
                            className="object-cover rounded-lg pointer-events-none select-none"
                            sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 320px"
                            draggable={false}
                            priority={index < 2}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}
