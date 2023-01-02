package co.nambaone.prj.review.command;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.review.service.ReviewService;
import co.nambaone.prj.review.service.ReviewVO;
import co.nambaone.prj.review.serviceImpl.ReviewServiceImpl;

public class ReviewUpdate implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 리뷰 수정을을 위한 데이터 호출 후 수정폼에 전달
		ReviewService dao = new ReviewServiceImpl();
		ReviewVO vo = new ReviewVO();
		

		
		vo.setReviewNum(Integer.valueOf(request.getParameter("reviewNum")));
		vo.setUserNickname(request.getParameter("userNickname"));
		vo.setReviewDate(Date.valueOf(request.getParameter("reviewDate")));
		vo.setReivewContent(request.getParameter("reivewContent"));
		vo.setReviewScore(Integer.valueOf(request.getParameter("reviewScore")));

		int cnt =dao.reviewUpdate(vo);
		
		
	
		
		String json=null;
		ObjectMapper mapper = new ObjectMapper();
			if(cnt > 0) {
				vo = dao.reviewSelect(vo); //수정처리후 ajax 응답에 id와 관련도니 모든정보를 넘겨줌
				try {
					json=mapper.writeValueAsString(vo);
				} catch (JsonProcessingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "Ajax:" + json;
			}
		
		return "Ajax:" + "{\"reCode\":\"Fail\"}";
	}

}
