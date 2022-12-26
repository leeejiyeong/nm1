package co.nambaone.prj.admin.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.nambaone.prj.common.Command;

public class AdminMain implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 관리자 페이지 메인
		return "admin/adminMain.tiles";

	}

}
