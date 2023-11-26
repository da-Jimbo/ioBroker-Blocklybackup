<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="KY40~~YH):la_[s]Y+f;">Ping Versuche</variable>
    <variable id="Kh^EcxP4o?*:={xggE?}">Versuche</variable>
    <variable id="8`d$d|-e;,@SnMur8`_F">AnzahlOnline</variable>
    <variable id="ya8}h]K_%v}hp%Yie?Y=">Text</variable>
    <variable id="iCuseR9iu];D).moPSZV">i</variable>
    <variable id="Zx}WCtVD%O5~c0}gF32=">ShellyOnline</variable>
  </variables>
  <block type="on" id="0pD(EXP[HA*pUZ!.g]|d" x="962" y="2724">
    <field name="OID">0_userdata.0.Haustechnik.Netzwerk.Stromausfall_Versuche</field>
    <field name="CONDITION">ne</field>
    <field name="ACK_CONDITION"></field>
    <statement name="STATEMENT">
      <block type="controls_if" id="Z_MfD3/h:xnlTx@NUrQi">
        <mutation else="1"></mutation>
        <value name="IF0">
          <block type="logic_compare" id="0d*tu/PeEJe(OYr2c[gN">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="on_source" id="G171eU64Yy?~*2{bB{#=">
                <field name="ATTR">state.val</field>
              </block>
            </value>
            <value name="B">
              <block type="math_number" id=";mR@VXN5|;6dl2A6`=P4">
                <field name="NUM">5</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="debug" id="wU/DkdDGRT#MU_3t:Jee">
            <field name="Severity">warn</field>
            <value name="TEXT">
              <shadow type="text" id="aK{WN{C{]U;Bg-C62TmH">
                <field name="TEXT">Stromausfall vermutet</field>
              </shadow>
            </value>
            <next>
              <block type="variables_set" id="Ps)7w*B1}S_]?Y[E$8yV">
                <field name="VAR" id="Kh^EcxP4o?*:={xggE?}">Versuche</field>
                <value name="VALUE">
                  <block type="math_number" id="u)KI5Gj9$uk*qr(%6xWM">
                    <field name="NUM">0</field>
                  </block>
                </value>
                <next>
                  <block type="controls_whileUntil" id="fw~HPds^=:BB=FSagEe;">
                    <field name="MODE">WHILE</field>
                    <value name="BOOL">
                      <block type="logic_compare" id="M{ca~pMF$k}?1Tg;%tY~">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="on_source" id="~OkNZU~2~PXo],^k|HNL">
                            <field name="ATTR">state.val</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="math_number" id="HyiCGT1,LX:z1{+tCh6W">
                            <field name="NUM">5</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO">
                      <block type="controls_if" id="KI7.HU}eYZa^`hWSO9^$">
                        <mutation else="1"></mutation>
                        <value name="IF0">
                          <block type="logic_compare" id="w4~X]E6}1]H}!6?J.cBK">
                            <field name="OP">GTE</field>
                            <value name="A">
                              <block type="variables_get" id="{/0q=1e6rd1[omY2UjYw">
                                <field name="VAR" id="Kh^EcxP4o?*:={xggE?}">Versuche</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="math_number" id="Hp~DX7Ce$P2}nuV%mXzB">
                                <field name="NUM">10</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="debug" id="iVTC27fH6o_G*PTn(z$8">
                            <field name="Severity">error</field>
                            <value name="TEXT">
                              <shadow type="text" id="BzOmv+YZaY4_]Zk7~JBk">
                                <field name="TEXT">Stromausfall erkannt!</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="timeouts_wait" id="K1dYdY,*J]%2Ylt|Hx:r">
                                <field name="DELAY">1</field>
                                <field name="UNIT">min</field>
                                <next>
                                  <block type="controls_flow_statements" id="nsM0Ef@JFTbF?[2l~FFo">
                                    <field name="FLOW">BREAK</field>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <statement name="ELSE">
                          <block type="math_change" id="+j5?;525WqL:`Ntr8%_H">
                            <field name="VAR" id="Kh^EcxP4o?*:={xggE?}">Versuche</field>
                            <value name="DELTA">
                              <shadow type="math_number" id="?1v]Yq`=Q#J{pkoIHwv+">
                                <field name="NUM">1</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="debug" id="*/Z~BvUCX3?(,78m,Qs%">
                                <field name="Severity">log</field>
                                <value name="TEXT">
                                  <shadow type="text" id="Ag-q06vTeNWoJBXASB;:">
                                    <field name="TEXT">test</field>
                                  </shadow>
                                  <block type="text_join" id="Le$8!5^5pVaUfys`(cy#">
                                    <mutation items="3"></mutation>
                                    <value name="ADD0">
                                      <block type="text" id="!~^veytCV$?AAyDgYg/6">
                                        <field name="TEXT">Versuch </field>
                                      </block>
                                    </value>
                                    <value name="ADD1">
                                      <block type="variables_get" id="Rvt~ie$K_#wt+t5u05Ig">
                                        <field name="VAR" id="Kh^EcxP4o?*:={xggE?}">Versuche</field>
                                      </block>
                                    </value>
                                    <value name="ADD2">
                                      <block type="text" id="s0dv7})z?ed?5!fz1~s+">
                                        <field name="TEXT"> von 10</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="timeouts_wait" id="dTZmj)dZ6LX#$GQdHPa%">
                                    <field name="DELAY">2</field>
                                    <field name="UNIT">min</field>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <statement name="ELSE">
          <block type="debug" id="-[}%(7UuwMAD[3!L6N`E">
            <field name="Severity">log</field>
            <value name="TEXT">
              <shadow type="text" id="u:EKAfIFuYRwu(^*VTO8">
                <field name="TEXT"></field>
              </shadow>
              <block type="text_join" id="NHT[ET2Cp4e)lxKn/@s/">
                <mutation items="2"></mutation>
                <value name="ADD0">
                  <block type="on_source" id="R;5e@[OB#=#wwFuZ!DQ%">
                    <field name="ATTR">state.val</field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="text" id="(6Sv:WSOy~KY-`vt_ZiG">
                    <field name="TEXT"> Netzwerkgeräte sind Offline!</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </statement>
      </block>
    </statement>
    <next>
      <block type="on_ext" id="E#!rBmeclD?Th|_$eeH}">
        <mutation xmlns="http://www.w3.org/1999/xhtml" items="5"></mutation>
        <field name="CONDITION">ne</field>
        <field name="ACK_CONDITION"></field>
        <value name="OID0">
          <shadow type="field_oid" id="c_3*99lL$pc/p9%vFl$G">
            <field name="oid">ping.0.ioBroker-Futro.192_168_1_1.alive</field>
          </shadow>
        </value>
        <value name="OID1">
          <shadow type="field_oid" id="3}Yb^E$aEkh`$I@@MWbk">
            <field name="oid">ping.0.ioBroker-Futro.192_168_1_6.alive</field>
          </shadow>
        </value>
        <value name="OID2">
          <shadow type="field_oid" id="XepJEE4Vk@Ni0|!fu)bb">
            <field name="oid">ping.0.ioBroker-Futro.192_168_1_7.alive</field>
          </shadow>
        </value>
        <value name="OID3">
          <shadow type="field_oid" id="?2N!hNQHh*x0I9viJ!9b">
            <field name="oid">ping.0.ioBroker-Futro.192_168_1_8.alive</field>
          </shadow>
        </value>
        <value name="OID4">
          <shadow type="field_oid" id="jQ@1U5atbwB~Et9VoHl2">
            <field name="oid">ping.0.ioBroker-Futro.192_168_1_9.alive</field>
          </shadow>
        </value>
        <statement name="STATEMENT">
          <block type="variables_set" id="M`L|Jwt42TfoG#o;`?)w">
            <field name="VAR" id="KY40~~YH):la_[s]Y+f;">Ping Versuche</field>
            <value name="VALUE">
              <block type="math_number" id="8x!AJGJM|ZdLFXJZIVB$">
                <field name="NUM">0</field>
              </block>
            </value>
            <next>
              <block type="controls_if" id="5AM1vSN-a0Nk$RUGd2tC">
                <value name="IF0">
                  <block type="logic_negate" id="kd_7N.qJ=s#.Ix20d,ts">
                    <value name="BOOL">
                      <block type="get_value" id="rUkCQ%@,SC3UnB?HR6jZ">
                        <field name="ATTR">val</field>
                        <field name="OID">ping.0.ioBroker-Futro.192_168_1_1.alive</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="math_change" id="nCWt31GWTo=dXkd(/kc*">
                    <field name="VAR" id="KY40~~YH):la_[s]Y+f;">Ping Versuche</field>
                    <value name="DELTA">
                      <shadow type="math_number" id="dP6R_6|Z70@l@YpT#nr4">
                        <field name="NUM">1</field>
                      </shadow>
                    </value>
                  </block>
                </statement>
                <next>
                  <block type="controls_if" id="RLpJ*a`Yg*-BfH(#tm;u">
                    <value name="IF0">
                      <block type="logic_negate" id="u3-tQw:tFHR%pDg$,-q4">
                        <value name="BOOL">
                          <block type="get_value" id="RY}sW#P7Gii+YWo17e8)">
                            <field name="ATTR">val</field>
                            <field name="OID">ping.0.ioBroker-Futro.192_168_1_6.alive</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="math_change" id="!84+5y^RL]8HX}#kYX%n">
                        <field name="VAR" id="KY40~~YH):la_[s]Y+f;">Ping Versuche</field>
                        <value name="DELTA">
                          <shadow type="math_number" id="5e279(NAYp=~JVy0Q+3}">
                            <field name="NUM">1</field>
                          </shadow>
                        </value>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if" id="RPYR}*Pi3kO]tF4%%d=L">
                        <value name="IF0">
                          <block type="logic_negate" id="r+SvoJ|$);5,#50+yKmM">
                            <value name="BOOL">
                              <block type="get_value" id="r[BvUm9HfL^1Ob.{()+P">
                                <field name="ATTR">val</field>
                                <field name="OID">ping.0.ioBroker-Futro.192_168_1_7.alive</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="math_change" id="*Cyu(_OF@DC6K^t,,a1V">
                            <field name="VAR" id="KY40~~YH):la_[s]Y+f;">Ping Versuche</field>
                            <value name="DELTA">
                              <shadow type="math_number" id="ox!I2}_}#?H~pMpV~{Km">
                                <field name="NUM">1</field>
                              </shadow>
                            </value>
                          </block>
                        </statement>
                        <next>
                          <block type="controls_if" id="=d0=meWO9KdV]i*oMa|l">
                            <value name="IF0">
                              <block type="logic_negate" id="|W:Pg)~TuIB9gABcY8d~">
                                <value name="BOOL">
                                  <block type="get_value" id="4,c_.dvEieDY-GZk-z:r">
                                    <field name="ATTR">val</field>
                                    <field name="OID">ping.0.ioBroker-Futro.192_168_1_8.alive</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="math_change" id="$Q0cmJ]/TP|-I:+^CsbR">
                                <field name="VAR" id="KY40~~YH):la_[s]Y+f;">Ping Versuche</field>
                                <value name="DELTA">
                                  <shadow type="math_number" id="k1v*PxC}xXQfdZ4:p[0a">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="]:y]Rv/-.ztkQ71U[iRf">
                                <value name="IF0">
                                  <block type="logic_negate" id="[$V3B:@mShJ=-|/T`c3a">
                                    <value name="BOOL">
                                      <block type="get_value" id="Cbz(t.#3R5uK|uZ#,htr">
                                        <field name="ATTR">val</field>
                                        <field name="OID">ping.0.ioBroker-Futro.192_168_1_9.alive</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="math_change" id="k^i%Kox%i3JlNqI,2%R{">
                                    <field name="VAR" id="KY40~~YH):la_[s]Y+f;">Ping Versuche</field>
                                    <value name="DELTA">
                                      <shadow type="math_number" id="4+5fYr4QFsfz(kCem*q+">
                                        <field name="NUM">1</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="update" id="6/xa3:N]/m+SJ1#HmTZf">
                                    <mutation xmlns="http://www.w3.org/1999/xhtml" delay_input="false"></mutation>
                                    <field name="OID">0_userdata.0.Haustechnik.Netzwerk.Stromausfall_Versuche</field>
                                    <field name="WITH_DELAY">FALSE</field>
                                    <value name="VALUE">
                                      <block type="variables_get" id="tA)Yy==UAiP-O_$,z~im">
                                        <field name="VAR" id="KY40~~YH):la_[s]Y+f;">Ping Versuche</field>
                                      </block>
                                    </value>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="on_ext" id=".Tmf7..m`I`ekVpUhola">
            <mutation xmlns="http://www.w3.org/1999/xhtml" items="1"></mutation>
            <field name="CONDITION">ne</field>
            <field name="ACK_CONDITION"></field>
            <value name="OID0">
              <shadow type="field_oid" id="z-g]sr0zD4fd}VMK1f,h">
                <field name="oid">hmip.0.devices.3014F711A00000DD89B26ED2.channels.0.lowBat</field>
              </shadow>
              <block type="selector" id="ZdE;^INty+Ed4Q;`+b;P">
                <field name="TEXT">state[id=*](functions=shellyonline)</field>
              </block>
            </value>
            <statement name="STATEMENT">
              <block type="variables_set" id="3tA{o#M_tBo[1?5j~G#x">
                <field name="VAR" id="8`d$d|-e;,@SnMur8`_F">AnzahlOnline</field>
                <value name="VALUE">
                  <block type="math_number" id="pV~-|`:QTWjva,^VkG6$">
                    <field name="NUM">0</field>
                  </block>
                </value>
                <next>
                  <block type="variables_set" id="^LS6]Vf#_/W*b?Dj*0QT">
                    <field name="VAR" id="ya8}h]K_%v}hp%Yie?Y=">Text</field>
                    <value name="VALUE">
                      <block type="lists_create_with" id="^~JMyWTdIdrz*w6Mn.Yx">
                        <mutation items="0"></mutation>
                      </block>
                    </value>
                    <next>
                      <block type="controls_forEach" id="F}dinmQmu9*)3pv_+s^W">
                        <field name="VAR" id="iCuseR9iu];D).moPSZV">i</field>
                        <value name="LIST">
                          <block type="selector" id="9svA90/R$x$/t{ni#+E}">
                            <field name="TEXT">state[id=*](functions=shellyonline)</field>
                          </block>
                        </value>
                        <statement name="DO">
                          <block type="variables_set" id="JWa(He(wCGhajJmwjgKt">
                            <field name="VAR" id="Zx}WCtVD%O5~c0}gF32=">ShellyOnline</field>
                            <value name="VALUE">
                              <block type="text_join" id="8=`%aVb!8rj2)Q5?)tkI">
                                <mutation items="3"></mutation>
                                <value name="ADD0">
                                  <block type="variables_get" id="*),K$#lR2_ZP6f]?o@L%">
                                    <field name="VAR" id="iCuseR9iu];D).moPSZV">i</field>
                                  </block>
                                </value>
                                <value name="ADD1">
                                  <block type="text" id="5,[kcFS:=q3t|$bMyEso">
                                    <field name="TEXT">=</field>
                                  </block>
                                </value>
                                <value name="ADD2">
                                  <block type="get_value_var" id="8sbmqmtHgGmrQ06XX`k4">
                                    <field name="ATTR">val</field>
                                    <value name="OID">
                                      <shadow type="text" id="U!n[@x(^jNEG?WcmVJ{$">
                                        <field name="TEXT"></field>
                                      </shadow>
                                      <block type="variables_get" id="SJK%6t4ks{1[Dz:b;m[S">
                                        <field name="VAR" id="iCuseR9iu];D).moPSZV">i</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="controls_if" id="I)8w%6Ub!UR{~l375q+(">
                                <value name="IF0">
                                  <block type="get_value_var" id="U~+L`to]|B_$CXN9Q5R/">
                                    <field name="ATTR">val</field>
                                    <value name="OID">
                                      <shadow type="text" id="0v_}:+~DUD(pJhX]tgJT">
                                        <field name="TEXT"></field>
                                      </shadow>
                                      <block type="variables_get" id=")W|+7NhY)u5Vo{d0tDi{">
                                        <field name="VAR" id="iCuseR9iu];D).moPSZV">i</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="math_change" id="JDVvF?Bwc,Fi+q)pbXHZ">
                                    <field name="VAR" id="8`d$d|-e;,@SnMur8`_F">AnzahlOnline</field>
                                    <value name="DELTA">
                                      <shadow type="math_number" id="y]rF1!4S85jzU*~.s)*r">
                                        <field name="NUM">1</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="lists_setIndex" id="*@7iH@0E}N_YOJ[jB]9s">
                                    <mutation at="false"></mutation>
                                    <field name="MODE">INSERT</field>
                                    <field name="WHERE">FIRST</field>
                                    <value name="LIST">
                                      <block type="variables_get" id="BDfdMJ}5Ag^Q)DHcn*!p">
                                        <field name="VAR" id="ya8}h]K_%v}hp%Yie?Y=">Text</field>
                                      </block>
                                    </value>
                                    <value name="TO">
                                      <block type="variables_get" id="azXsY*6@!;v(2#9f~0$X">
                                        <field name="VAR" id="Zx}WCtVD%O5~c0}gF32=">ShellyOnline</field>
                                      </block>
                                    </value>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="update" id="K}{Ask!8(gYu20`bJI*T">
                            <mutation xmlns="http://www.w3.org/1999/xhtml" delay_input="false"></mutation>
                            <field name="OID">0_userdata.0.Haustechnik.Netzwerk.ShellysOnline</field>
                            <field name="WITH_DELAY">FALSE</field>
                            <value name="VALUE">
                              <block type="variables_get" id="=;q+aC83mPiqc3^^JPR^">
                                <field name="VAR" id="ya8}h]K_%v}hp%Yie?Y=">Text</field>
                              </block>
                            </value>
                            <next>
                              <block type="update" id="IU5a~OQg5V(ljcIpMV55">
                                <mutation xmlns="http://www.w3.org/1999/xhtml" delay_input="false"></mutation>
                                <field name="OID">0_userdata.0.Haustechnik.Netzwerk.AnzahlOnline</field>
                                <field name="WITH_DELAY">FALSE</field>
                                <value name="VALUE">
                                  <block type="variables_get" id="$8iMs7}cBA)1pmp8ESCy">
                                    <field name="VAR" id="8`d$d|-e;,@SnMur8`_F">AnzahlOnline</field>
                                  </block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
