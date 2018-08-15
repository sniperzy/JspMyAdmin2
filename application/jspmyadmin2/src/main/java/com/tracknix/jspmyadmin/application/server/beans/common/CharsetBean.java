package com.tracknix.jspmyadmin.application.server.beans.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.tracknix.jspmyadmin.framework.web.utils.Bean;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;
import java.util.Map;

/**
 * @author Yugandhar Gangu
 */
@EqualsAndHashCode(callSuper = true)
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CharsetBean extends Bean {

    private static final long serialVersionUID = 1L;

    private String[] columns;
    private Map<String, List<String[]>> charsets;
}