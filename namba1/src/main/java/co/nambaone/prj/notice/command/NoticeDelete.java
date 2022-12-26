package co.nambaone.prj.notice.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.notice.service.NoticeService;
import co.nambaone.prj.notice.service.NoticeVO;
import co.nambaone.prj.notice.serviceImpl.NoticeServiceImpl;



public class NoticeDelete implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 공지사항 삭제
		NoticeService dao = new NoticeServiceImpl();
		NoticeVO vo = new NoticeVO();
		vo.setNoticeNum(Integer.valueOf(request.getParameter("noticeNum")));
		int n = dao.noticeDelete(vo);
		if(n != 0) {
			request.setAttribute("message", "공지사항이 삭제되었습니다.");
		} else {
			request.setAttribute("message", "공지사항이 삭제실패했습니다.");
		}
		return "notice/noticeList.tiles";
	}

}
