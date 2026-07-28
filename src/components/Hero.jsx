import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();

    // تأثير بارالاكس خفيف عند التمرير
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // النص المراد كتابته تلقائياً
    const fullText = `دودتي وحبيبت قلبي انهاردة يوم م عادي انهاردة اليوم اللي اتولدت فيه اجمل انسانه خلقها ربنا 💗 أنتی اجمل صدفه حصلتلي فحياتي من ساعة مبقينا مع بعض وانا كل حياتي اتغيرت للأحسن ومن ساعتها اتأكدت اني حياتي م هينفع تكمل غير بيكي ينوور عيني 💗كل يوم بيعدي علينا مع بعض يروحي بيبقي احلا يوم فحياتي والله 😘وانا بالنسبالي اليوم دا اجمل يوم فيحاتيي ،نفسي اقولك كلام كتيييير يروحي والله بس مهما قولت م هقدر اوصفلك اللي ف قلبي ليكي ينوور عيني انتي م بس حبيبتي انتي كل حياتي انتي هدية ربنا ليا اللي بدعي فكل صلاتي انو يجمعني بيكي علي خير عارف انك داخلة علي اكتر سنتين هتتعبي فيهم فحياتك بس انتي قدها ينوور عيني وهتحققي حلمنا وتبقي احلي دكتورة ف الدنيا🥰 وعايز اقولك ان كلمة بحبك دي قليلة اوي عليكي انا بعشقككك وبدمنكك ينور عيني 💗ربنا يجمعني بيكي علي خير يست البنات 💗ووعد ينور عيني ثقتك فيا هكون قدها وهتعب علشان خاطر احقق حلمنا ونبقي لبعض ف النهاية يحبيبت قلبي💗 بجد بجد ينور عيني الكلام م كفايا والله علشان اوصفلك اللي ف قلبي بتمنالك سنة سعيدة ينوور عيني💗💗احلي كل سنة وانتي طيبة ي احلي دودااا ربنا ميحرمني منك يروحي💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗`;

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    // تأثير الكتابة التلقائية حرف بحرف
    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 30); // سرعة الكتابة (كلما قل الرقم زادت السرعة)
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <motion.section
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white bg-[#030014] selection:bg-purple-500/30"
        >
            {/* 1. الخلفية السينمائية المتطورة */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.2, filter: 'blur(10px)' }}
                    animate={{ scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2000"
                    className="w-full h-full object-cover opacity-60 scale-110"
                    alt="Background"
                />
                {/* Overlay Layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/80 via-transparent to-[#030014]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
            </div>

            {/* 2. جزيئات عائمة (Floating Dust) */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full z-10"
                    initial={{
                        x: Math.random() * 2000 - 1000,
                        y: Math.random() * 1000,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, -1000],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* 3. المحتوى الرئيسي */}
            <motion.div style={{ y: y1, opacity }} className="z-20 flex flex-col items-center text-center px-4 max-w-4xl">

                {/* الشارة العلوية */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner flex items-center gap-3"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium text-pink-200/70">
                        إلى أغلى ما أملك
                    </span>
                </motion.div>

                {/* الاسم بتأثير ذهبي/أبيض متدرج */}
                <motion.h1
                    initial={{ letterSpacing: "0.5em", filter: "blur(12px)", opacity: 0 }}
                    animate={{ letterSpacing: "0.1em", filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="text-7xl md:text-[11rem] font-black leading-none mb-4"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-white drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">
                        Dodty
                    </span>
                </motion.h1>

                {/* الرسالة العاطفية (بنظام الكتابة التلقائية Typewriter) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-4 max-h-[35vh] overflow-y-auto px-2 custom-scrollbar"
                >
                    <p className="text-sm md:text-xl font-light text-white/80 tracking-wide pt-4 leading-relaxed whitespace-pre-wrap">
                        {displayedText}
                        <span className="inline-block w-1.5 h-5 bg-pink-500 ml-1 animate-pulse align-middle"></span>
                    </p>
                </motion.div>
            </motion.div>


            {/* 5. المؤثرات الضوئية الجانبية (Vignette & Glow) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030014] to-transparent pointer-events-none" />
            <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" />
            <div className="absolute -right-[10%] bottom-[10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        </motion.section>
    );
};

export default Hero;