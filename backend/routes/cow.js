var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let message = [
    "Hãy sống theo niềm tin của mình và bạn có thể xoay chuyển cả thế giới.",
    "Những khó khăn trong cuộc sống là điều không tránh khỏi, việc cần làm là lựa chọn cách thức để vượt qua.",
    "Đừng chờ đợi những gì bạn ước muốn mà hãy đi tìm kiếm chúng.",
    "Tôi không bao giờ hối hận với những gì mình đã làm. Tôi chỉ hối hận với những việc mình đã không làm khi có cơ hội.",
    "Từ trải nghiệm của quá khứ chúng ta ta rút ra bài học dẫn đường cho tương lai.",
    "Cuộc sống không phải là một vấn đề cần phải được giải quyết, mà là một thực tại cần phải được trải nghiệm.",
    "Người duy nhất mắc sai lầm chính là người không làm gì cả. Đừng sợ sai lầm, miễn là bạn đừng mắc cùng một sai lầm hai lầm.",
    "Thất bại đơn giản chỉ là cơ hội để bắt đầu lại mọi thứ một cách thông minh hơn.",
    "Cuộc sống đầy ắp những việc không như ý, chúng ta chẳng thể nào né tránh. Điều duy nhất có thể làm là thay đổi góc nhìn về nó.",
    "Cuộc sống của bạn chỉ thật sự ý nghĩa và trọn vẹn khi bạn biết giữ gìn và nuôi dưỡng ước mơ, biết ghi nhận, biết tin vào những lời hứa.",
    "Bình yên là tấm gương phản chiếu của hạnh phúc và hạnh phúc được soi rọi từ tình yêu.",
    "Chỉ đến khi chấp nhận mình khiếm khuyết rồi tìm cách bù đắp lại lỗ hỏng, con người mới mong có ngày bình yên.",
    "Cuộc sống mỗi người biết đủ là đủ đầy thì mọi thứ sẽ trở nên bình yên lạ thường.",
    "Bữa cơm ngon ngọt, an lành với gia đình là điều bình yên nhất gạt phăng mọi khó khăn trong cuộc sống này.",
    "5. Bình yên nằm trong tâm trí, vậy mà người người không biết cứ sốt sắng tìm kiếm từ bên ngoài.",
    "Bình yên là khi ngoảnh lại những năm tháng đã qua, thấy gập ghềnh chông gai lởm chởm. Thế mà mình vẫn còn ngồi đây với một vài vết xước nhỏ đã phai màu.",
    "Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn.",
    "Bình yên là khi lòng không vui cũng chẳng buồn!",
    "Ngược xuôi ngang dọc, hóa ra bình yên là cảm giác được quay trở về làm một đứa trẻ thơ, thích thì cười, buồn thì khóc, khó chịu thì nói ra, không như bạn ở thì hiện tại của cuộc sống.",
    "Mỗi một người đều cất chứa trong đáy lòng một phần thi sầu, một chút thiền ý. Ở trên đường đời đông đúc chật chội, chỉ muốn chấm dứt tất thảy sóng gió hồng trần, tìm một nơi an tĩnh qua ngày.",
    "Khi mọi thứ dường như chống lại bạn. Hãy nhớ rằng máy bay chỉ có thể cất cánh khi chống lại gió, không phải thuận theo nó.",
    "Người bi quan luôn tìm thấy những khó khăn trong mọi cơ hội.",
    "Giáo dục là vũ khí mạnh mẽ nhất mà bạn có thể sử dụng để thay đổi thế giới.",
    "Trí thông minh của chúng ta bắt nguồn từ kinh nghiệm, còn kinh nghiệm có được từ sự ngu dốt của chúng ta - X - Gitri.",
    "Muốn mua đồ mà không cần nhìn giá, hãy lao động mà không nhìn đồng hồ.",
    "Hãy đầu tư vào những giấc mơ của bạn. Chắc chắn bạn sẽ tỏa sáng sau này.",
    "Không bao giờ là quá muộn để bạn bắt đầu giấc mơ của mình.",
    "Khi bạn mang lại niềm vui cho người khác, bạn sẽ nhận được nhiều niềm vui hơn. Bạn nên suy nghĩ tốt về hạnh phúc mà bạn có thể cho đi.",
    "Không phải người ta ngừng theo đuổi giấc mơ vì mình già đi, người ta già đi vì ngừng theo đuổi giấc mơ.",
    "Đừng bao giờ hối tiếc về những gì đã xảy ra trong quá khứ. Vì thời điểm ấy, đó chính xác là những gì bạn muốn.",
    "Có rất nhiều việc tựa như gió thoảng mây bay. Chỉ cần trân trọng những gì mình đang có, chúng ta mới không phải nuối tiếc trong cuộc sống. – Đừng lựa chọn an nhàn khi còn trẻ.",
    "Cuộc sống không phải là cuộc chiến tranh với những người khác, mà là cuộc chạy đua trường kỳ với chính bản thân mình. – Bước chậm lại giữa thế gian vội vã.",
    "Không nên mất thời gian để hối tiếc quá khứ một cách vô ích hoặc than phiền về những thay đổi khiến ta khó chịu, vì thay đổi là tất yếu của cuộc sống. – Bạn chỉ sống có một lần.",
    "Cuộc sống ngắn ngủi, hãy luôn tận hưởng và làm điều mình thích. Sống cho bản thân mình mới là sống. Sống bằng ánh nhìn của người khác thì khác nào sống mà như đã chết? – Sẽ có cách, đừng lo!",
    "Dù tiền bạc, sự nghiệp chưa nhiều, thì nhân cách phải lung linh. Nhân cách đẹp thì mới tự tin hất mặt lên trời - Tony buổi sáng.",
    "Ai cũng muốn thay đổi cả thế giới, những thói hư tật xấu của mình còn không sửa được thì làm được việc gì - Trên đường băng.",
    "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó - Nhà giả kim.",
    "Đời người như cái đồng hồ cát, tối đa 100 năm, một ngày sống là một ngày mình gần đến cái chết, mắc mớ gì mình lành lặn tay chân, biết đọc, biết viết mà sáng ngủ dậy, rồi ăn, rồi ngủ, rồi hết ngày, uổng vậy. Đừng đổ lỗi cho ai. Đâu có thể thay đổi chương trình giáo dục, cũng đâu có thể thay đổi thầy cô, chỉ có một giải pháp duy nhất là TỰ THAY ĐỔI MÌNH - Tony buổi sáng.",
    "Tất cả những người lớn đều từng là trẻ con... nhưng rất ít người trong số đó nhớ về điều đó - Hoàng tử bé.",
    "Đừng quên rằng trái tim cậu ở đâu thì kho báu cũng ở đó - Nhà giả kim.",
    "Một số người nghĩ sang trọng đối lập với nghèo khó. Nhưng không phải vậy. Sự sang trọng đối lập với sự thô tục.",
    "The only person you are destined to become is the person you decide to be.",
    "You don't have to be great to start, but you have to start to be great.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only true wisdom is in knowing you know nothing.",
    "The journey of a thousand miles begins with a single step.",
    "Life is what happens when you're busy making other plans.",
    "Education is the most powerful weapon which you can use to change the world.",
    "Curiosity is the wick in the lamp of knowledge.",
    "The only source of knowledge is experience.",
    "Kindness is the language that the deaf can hear and the blind can see.",
    "Love is the greatest refreshment in life.",
    "There is always some madness in love. But there is also always some reason in madness.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Gratitude turns what we have into enough.",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    "Success is not final; failure is not fatal: it is the courage to continue that counts.",
    "The difference between ordinary and extraordinary is that little extra.",
    "It does not matter how slowly you go as long as you do not stop.",
    "I love deadlines. I like the whooshing sound they make as they fly by.",
    "There are two things to worry about: First, that you'll not get what you want. Second, that you'll get it.",
    "Laughter is the best medicine.",
    "Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid.",
    "Creativity is intelligence having fun.",
    "Innovation distinguishes between a leader and a follower.",
    "The only constant in life is change.",
    "The mind is everything. What you think you become.",
    "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.",
    "Two roads diverged in a wood, and I - I took the one less traveled by, And that has made all the difference.",
    "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
    "The best revenge is massive success."
  ];
  let index = getRndInteger(0, message.length);
  console.log(index);
  res.json({ msg: message[index] });
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;
