function Calendar(){
return(
        <div id="calendar-wrapper">
            <div id="calendar-nav">
                <div>
                    March 2023
                </div>
                <div id="month-switcher">
                    <div id="prev-month" className="switch-button"> {'<'} </div>
                    <div id="next-month" className="switch-button"> {'>'} </div>
                </div>
            </div>
            <div id="day-names">
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
            </div>
            <div id="days-num">
                <li className="inactive">30</li>
                <li className="inactive">31</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li className="active">28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <li className="inactive">1</li>
                <li className="inactive">2</li>
            </div>
        </div>
)
}

export default Calendar